import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Attractions", href: "#attractions" },
    { label: "Gallery", href: "#gallery" },
    { label: "Activities", href: "#activities" },
    { label: "How to Reach", href: "#reach" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="site-header"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "backdrop-blur-xl bg-[#F8F7F4]/80 border-b border-black/5 shadow-[0_4px_24px_-12px_rgba(26,47,36,0.18)]"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
                <a
                    href="#top"
                    data-testid="site-name-link"
                    className="flex flex-col leading-none"
                >
                    <span
                        className={`font-sans font-semibold text-xl md:text-[22px] tracking-tight ${
                            scrolled ? "text-[#1A2F24]" : "text-white"
                        } transition-colors`}
                    >
                        Kalvarayan hills
                    </span>
                    <span
                        className={`text-[10px] tracking-[0.32em] uppercase mt-0.5 ${
                            scrolled ? "text-[#8A9A92]" : "text-white/70"
                        } transition-colors`}
                    >
                        in salem
                    </span>
                </a>

                <nav className="hidden lg:flex items-center gap-9">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                            className={`text-[13px] tracking-wide hover:opacity-60 transition-opacity ${
                                scrolled ? "text-[#1A2F24]" : "text-white"
                            }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <a
                    href="#contact"
                    data-testid="header-plan-visit-btn"
                    className={`hidden lg:inline-flex items-center px-5 py-2.5 text-[12px] tracking-[0.18em] uppercase border transition-all duration-300 ${
                        scrolled
                            ? "border-[#1A2F24] text-[#1A2F24] hover:bg-[#1A2F24] hover:text-[#F8F7F4]"
                            : "border-white/70 text-white hover:bg-white hover:text-[#1A2F24]"
                    }`}
                >
                    Plan a Visit
                </a>

                <button
                    data-testid="mobile-menu-toggle"
                    onClick={() => setOpen(!open)}
                    className={`lg:hidden p-2 ${
                        scrolled ? "text-[#1A2F24]" : "text-white"
                    }`}
                    aria-label="Toggle menu"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div
                    data-testid="mobile-menu"
                    className="lg:hidden absolute top-full left-0 right-0 bg-[#F8F7F4] border-t border-black/5 px-6 py-6"
                >
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                                className="text-[#1A2F24] text-base py-2 border-b border-black/5"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                            data-testid="mobile-plan-visit-btn"
                            className="mt-2 inline-flex justify-center items-center px-5 py-3 text-[12px] tracking-[0.18em] uppercase border border-[#1A2F24] text-[#1A2F24]"
                        >
                            Plan a Visit
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
