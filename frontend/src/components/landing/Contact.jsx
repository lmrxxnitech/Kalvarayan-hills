import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const onChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            toast.error("Please fill in name, email and message.");
            return;
        }
        try {
            setLoading(true);
            await axios.post(`${API}/contact`, form);
            toast.success("Thank you — we'll be in touch soon.");
            setForm({ name: "", email: "", phone: "", message: "" });
        } catch (err) {
            toast.error("Something went wrong. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="bg-[#1A2F24] text-[#F8F7F4] py-24 lg:py-40"
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                <div className="lg:col-span-5">
                    <span className="text-[11px] tracking-[0.3em] uppercase text-[#8A9A92]">
                        — Plan a Visit
                    </span>
                    <h2 className="font-serif text-4xl lg:text-6xl tracking-tight leading-[1.05] mt-6">
                        Tell us when
                        <br />
                        <span className="italic font-light text-[#E2E7E4]">
                            you'd like to come.
                        </span>
                    </h2>
                    <p className="mt-6 text-[#E2E7E4]/75 leading-relaxed max-w-md">
                        Group of two or twenty, weekend or week-long — we'll
                        match you with a local host and put together an
                        itinerary that fits how you travel.
                    </p>

                    <div className="mt-12 space-y-6">
                        <div className="flex items-start gap-4">
                            <Mail
                                size={18}
                                strokeWidth={1.4}
                                className="text-[#C86A53] mt-1"
                            />
                            <div>
                                <p className="text-[10px] tracking-[0.28em] uppercase text-[#8A9A92]">
                                    Email
                                </p>
                                <p className="font-serif text-xl mt-1">
                                    hello@kalvarayanhills.in
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone
                                size={18}
                                strokeWidth={1.4}
                                className="text-[#C86A53] mt-1"
                            />
                            <div>
                                <p className="text-[10px] tracking-[0.28em] uppercase text-[#8A9A92]">
                                    Phone
                                </p>
                                <p className="font-serif text-xl mt-1">
                                    +91 98000 00000
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <MapPin
                                size={18}
                                strokeWidth={1.4}
                                className="text-[#C86A53] mt-1"
                            />
                            <div>
                                <p className="text-[10px] tracking-[0.28em] uppercase text-[#8A9A92]">
                                    Address
                                </p>
                                <p className="font-serif text-xl mt-1 max-w-xs">
                                    Periya Kalrayan, Salem District,
                                    <br />
                                    Tamil Nadu — 636 121
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <form
                    onSubmit={onSubmit}
                    data-testid="contact-form"
                    className="lg:col-span-7 lg:pl-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                    <Field
                        label="Your name"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        testid="contact-name"
                    />
                    <Field
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={onChange}
                        testid="contact-email"
                    />
                    <div className="sm:col-span-2">
                        <Field
                            label="Phone (optional)"
                            name="phone"
                            value={form.phone}
                            onChange={onChange}
                            testid="contact-phone"
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block">
                            <span className="text-[10px] tracking-[0.28em] uppercase text-[#8A9A92]">
                                Message
                            </span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={onChange}
                                rows={5}
                                data-testid="contact-message"
                                placeholder="When would you like to visit, and what kind of trip do you have in mind?"
                                className="mt-3 w-full bg-transparent border-b border-[#E2E7E4]/30 focus:border-[#C86A53] outline-none py-3 text-[#F8F7F4] placeholder:text-[#E2E7E4]/35 font-serif text-lg resize-none transition-colors duration-300"
                            />
                        </label>
                    </div>
                    <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-4">
                        <p className="text-xs text-[#E2E7E4]/55 max-w-md">
                            We respond within 24 hours, usually with a few
                            follow-up questions and 2–3 itinerary options.
                        </p>
                        <button
                            type="submit"
                            disabled={loading}
                            data-testid="contact-submit-btn"
                            className="inline-flex items-center justify-center px-10 py-4 bg-[#C86A53] text-white text-[12px] tracking-[0.22em] uppercase hover:bg-white hover:text-[#1A2F24] transition-colors duration-500 disabled:opacity-60"
                        >
                            {loading ? "Sending…" : "Send Message"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

function Field({ label, name, type = "text", value, onChange, testid }) {
    return (
        <label className="block">
            <span className="text-[10px] tracking-[0.28em] uppercase text-[#8A9A92]">
                {label}
            </span>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                data-testid={testid}
                className="mt-3 w-full bg-transparent border-b border-[#E2E7E4]/30 focus:border-[#C86A53] outline-none py-3 text-[#F8F7F4] font-serif text-lg transition-colors duration-300"
            />
        </label>
    );
}
