import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="top"
            data-testid="hero-section"
            className="relative min-h-screen w-full overflow-hidden grain"
        >
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1764012394013-0e3639b223dd?crop=entropy&cs=srgb&fm=jpg&w=2000&q=85"
                    alt="Misty rolling hills of Kalvarayan"
                    className="w-full h-full object-cover animate-slow-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A2F24]/55 via-[#1A2F24]/25 to-[#1A2F24]/85" />
            </div>

            {/* Top label bar */}
            <div className="relative z-10 pt-28 lg:pt-32">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="flex items-center gap-3 text-white/80 text-[11px] tracking-[0.32em] uppercase animate-fade-in opacity-0 [animation-delay:200ms]">
                        <span className="w-12 h-px bg-white/50" />
                        <span>Eastern Ghats · Salem · Tamil Nadu</span>
                    </div>
                </div>
            </div>

            {/* Title block */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 mt-16 lg:mt-28">
                <h1
                    data-testid="hero-title"
                    className="font-serif text-white text-[44px] sm:text-6xl lg:text-[112px] xl:text-[128px] leading-[0.95] tracking-tight max-w-[1100px] animate-fade-up opacity-0 [animation-delay:400ms]"
                >
                    Build values <br />
                    <span className="italic font-light text-[#E2E7E4]">
                        for the
                    </span>{" "}
                    Future
                </h1>

                <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end animate-fade-up opacity-0 [animation-delay:700ms]">
                    <p className="lg:col-span-5 text-white/85 text-base lg:text-lg leading-relaxed max-w-md">
                        Where the Eastern Ghats fold into shola forest, tribal
                        hamlets, coffee terraces and quiet waterfalls — a hill
                        country shaping its tomorrow on its own terms.
                    </p>

                    <div className="lg:col-span-7 lg:justify-self-end flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <a
                            href="#about"
                            data-testid="hero-explore-btn"
                            className="inline-flex items-center px-8 py-4 bg-[#F8F7F4] text-[#1A2F24] text-[12px] tracking-[0.22em] uppercase hover:bg-[#C86A53] hover:text-white transition-colors duration-500"
                        >
                            Explore the Hills
                        </a>
                        <a
                            href="#contact"
                            data-testid="hero-contact-btn"
                            className="inline-flex items-center px-8 py-4 border border-white/70 text-white text-[12px] tracking-[0.22em] uppercase hover:bg-white hover:text-[#1A2F24] transition-colors duration-500"
                        >
                            Plan a Visit
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom strip */}
            <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/15 backdrop-blur-md bg-[#1A2F24]/30">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
                    {[
                        { k: "Elevation", v: "1,200 m" },
                        { k: "From Salem", v: "85 km" },
                        { k: "Best Season", v: "Oct – Mar" },
                        { k: "Climate", v: "16 – 24 °C" },
                    ].map((s) => (
                        <div
                            key={s.k}
                            data-testid={`hero-stat-${s.k.toLowerCase().replace(/\s+/g, "-")}`}
                            className="flex flex-col"
                        >
                            <span className="text-[10px] tracking-[0.3em] uppercase text-white/55">
                                {s.k}
                            </span>
                            <span className="font-serif text-2xl mt-1.5">
                                {s.v}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <a
                href="#about"
                data-testid="scroll-indicator"
                className="hidden md:flex absolute right-8 bottom-32 z-10 flex-col items-center gap-3 text-white/70 hover:text-white transition-colors"
            >
                <span className="text-[10px] tracking-[0.3em] uppercase rotate-90 origin-center mt-6">
                    Scroll
                </span>
                <ArrowDown size={16} className="animate-bounce" />
            </a>
        </section>
    );
}
