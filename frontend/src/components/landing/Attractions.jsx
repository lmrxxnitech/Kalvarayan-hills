const items = [
    {
        title: "Megam Falls",
        tag: "Waterfall",
        copy: "A 300-foot cascade tucked into the eastern face — best after the northeast monsoon, when the rocks turn black and the mist climbs back up the cliff.",
        img: "https://images.unsplash.com/photo-1610044850302-07625664a2dc?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
        span: "lg:col-span-7 lg:row-span-2",
        height: "h-[420px] lg:h-[640px]",
    },
    {
        title: "Periya Kalrayan",
        tag: "Upper Range",
        copy: "Cool plateau villages, coffee shade and pepper vines.",
        img: "https://images.unsplash.com/photo-1764012394296-23449366f834?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
        span: "lg:col-span-5",
        height: "h-[300px]",
    },
    {
        title: "Vaniyar Reservoir",
        tag: "Viewpoint",
        copy: "Still water, a single road, and the long blue ridge of the Eastern Ghats.",
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=srgb&fm=jpg&w=900&q=85",
        span: "lg:col-span-5",
        height: "h-[320px]",
    },
    {
        title: "Tribal Hamlets",
        tag: "Culture",
        copy: "Malayali settlements where homes are still hand-painted, harvests still shared, and stories still told around the fire.",
        img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
        span: "lg:col-span-6",
        height: "h-[360px]",
    },
    {
        title: "Orange Groves",
        tag: "Plantations",
        copy: "Hill oranges, jackfruit and silver oak shade — a slow agriculture that quietly rebuilds soil every season.",
        img: "https://images.unsplash.com/photo-1457530378978-8bac673b8062?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85",
        span: "lg:col-span-6",
        height: "h-[360px]",
    },
];

export default function Attractions() {
    return (
        <section
            id="attractions"
            data-testid="attractions-section"
            className="bg-[#1A2F24] text-[#F8F7F4] py-24 lg:py-40"
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24">
                    <div>
                        <span className="text-[11px] tracking-[0.3em] uppercase text-[#8A9A92]">
                            — Things to See
                        </span>
                        <h2 className="font-serif text-4xl lg:text-6xl tracking-tight leading-[1.05] mt-6 max-w-[800px]">
                            Five reasons the
                            <br />
                            <span className="font-light text-[#E2E7E4]">
                                hills hold you longer
                            </span>
                            .
                        </h2>
                    </div>
                    <p className="text-[#E2E7E4]/70 max-w-sm leading-relaxed text-sm">
                        Waterfalls, viewpoints, plantations, tribal villages —
                        a short list, walked slowly, in any order you prefer.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
                    {items.map((it, idx) => (
                        <article
                            key={it.title}
                            data-testid={`attraction-${idx}`}
                            className={`group relative overflow-hidden ${it.span} ${it.height}`}
                        >
                            <img
                                src={it.img}
                                alt={it.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1400ms] ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a14] via-[#0d1a14]/30 to-transparent" />
                            <div className="absolute inset-0 p-7 lg:p-9 flex flex-col justify-end">
                                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C86A53]">
                                    {it.tag}
                                </span>
                                <h3 className="font-serif text-3xl lg:text-4xl text-white mt-2 leading-tight">
                                    {it.title}
                                </h3>
                                <p className="mt-3 text-[#F8F7F4]/75 text-sm leading-relaxed max-w-md">
                                    {it.copy}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
