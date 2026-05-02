import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Attractions from "@/components/landing/Attractions";
import Gallery from "@/components/landing/Gallery";
import Activities from "@/components/landing/Activities";
import HowToReach from "@/components/landing/HowToReach";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const Landing = () => {
    return (
        <div data-testid="landing-page" className="bg-[#F8F7F4] text-[#1A2F24]">
            <Header />
            <main>
                <Hero />
                <About />
                <Attractions />
                <Gallery />
                <Activities />
                <HowToReach />
                <Contact />
            </main>
            <Footer />
            <Toaster position="bottom-right" richColors />
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
