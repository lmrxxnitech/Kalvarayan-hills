const routes = [
    {
        mode: "By Road",
        distance: "85 km",
        time: "≈ 2.5 hours",
        text: "From Salem city via Attur and Kallakurichi roads. Last 30 km wind through forest ghat — drive in daylight.",
    },
    {
        mode: "By Train",
        distance: "Salem Jn.",
        time: "Major stop",
        text: "Salem Junction is the nearest railhead. Pre-arranged taxi or local bus continues to the hills.",
    },
    {
        mode: "By Air",
        distance: "Trichy / CJB",
        time: "≈ 4 hours",
        text: "Tiruchirappalli is the closest airport (≈ 165 km). Coimbatore (≈ 250 km) is the next option for international arrivals.",
    },
];

export default function HowToReach() {
    return (
        <section
            id="reach"
            data-testid="reach-section"
            className="bg-[#F8F7F4] py-24 lg:py-32"
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                <div className="lg:col-span-5">
                    <span className="text-[11px] tracking-[0.3em] uppercase text-[#8A9A92]">
                        — How to Reach
                    </span>
                    <h2 className="font-serif text-4xl lg:text-5xl text-[#1A2F24] tracking-tight leading-[1.05] mt-5">
                        Three ways
                        <br />
                        <span className="font-light">in.</span>
                    </h2>
                    <p className="mt-6 text-[#4A5D53] leading-relaxed max-w-md">
                        Salem is the gateway. From there, the climb begins —
                        either a winding road through the ghats, or a quiet
                        bus from the foothills. Either way, the air thins, and
                        the noise stops following you up.
                    </p>

                    <div className="mt-10 aspect-[4/3] overflow-hidden">
                        <iframe
                            data-testid="reach-map"
                            title="Kalvarayan Hills Map"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=78.40%2C11.55%2C78.95%2C12.05&layer=mapnik&marker=11.78,78.65"
                            className="w-full h-full border-0 grayscale-[0.4]"
                        />
                    </div>
                </div>

                <div className="lg:col-span-7">
                    <ol className="relative border-l border-[#1A2F24]/15">
                        {routes.map((r, i) => (
                            <li
                                key={r.mode}
                                data-testid={`route-${i}`}
                                className="pl-10 pb-12 last:pb-0 relative"
                            >
                                <span className="absolute -left-[7px] top-2 w-3.5 h-3.5 bg-[#C86A53] rounded-full" />
                                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                                    <span className="text-[10px] tracking-[0.28em] uppercase text-[#8A9A92]">
                                        0{i + 1}
                                    </span>
                                    <h3 className="font-serif text-3xl text-[#1A2F24]">
                                        {r.mode}
                                    </h3>
                                    <span className="text-sm text-[#C86A53]">
                                        {r.distance} · {r.time}
                                    </span>
                                </div>
                                <p className="mt-4 text-[#4A5D53] leading-relaxed max-w-xl">
                                    {r.text}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
