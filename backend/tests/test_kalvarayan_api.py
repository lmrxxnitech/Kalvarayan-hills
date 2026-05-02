"""Backend tests for Kalvarayan Hills landing page API."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://kalvarayan-salem.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Module: root API health
class TestRoot:
    def test_root_message(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "Kalvarayan" in data["message"]


# Module: contact form CRUD
class TestContact:
    def test_create_contact_success(self, client):
        payload = {
            "name": "TEST_User",
            "email": "test_user@example.com",
            "phone": "+91 9876543210",
            "message": "Looking forward to visiting Kalvarayan hills."
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["phone"] == payload["phone"]
        assert data["message"] == payload["message"]
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "created_at" in data
        assert "_id" not in data

    def test_create_contact_without_phone(self, client):
        payload = {
            "name": "TEST_NoPhone",
            "email": "test_nophone@example.com",
            "message": "No phone provided."
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data.get("phone") in (None, "")

    def test_create_contact_invalid_email_returns_422(self, client):
        payload = {
            "name": "TEST_InvalidEmail",
            "email": "not-an-email",
            "message": "Should fail validation."
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_create_contact_missing_email_returns_422(self, client):
        payload = {
            "name": "TEST_NoEmail",
            "message": "No email."
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_create_contact_missing_name_returns_422(self, client):
        payload = {
            "email": "noname@example.com",
            "message": "No name."
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_create_contact_empty_message_returns_422(self, client):
        payload = {
            "name": "TEST_EmptyMsg",
            "email": "empty_msg@example.com",
            "message": ""
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_list_contacts_returns_saved(self, client):
        # Seed one
        payload = {
            "name": "TEST_ListUser",
            "email": "test_list@example.com",
            "phone": "1234567890",
            "message": "List me."
        }
        cr = client.post(f"{API}/contact", json=payload)
        assert cr.status_code == 200
        created_id = cr.json()["id"]

        r = client.get(f"{API}/contact")
        assert r.status_code == 200
        contacts = r.json()
        assert isinstance(contacts, list)
        # No _id present in any item
        for c in contacts:
            assert "_id" not in c
            assert "id" in c
            assert "name" in c
            assert "email" in c
            assert "message" in c
            assert "created_at" in c
        # Our newly created one is present
        ids = [c["id"] for c in contacts]
        assert created_id in ids
