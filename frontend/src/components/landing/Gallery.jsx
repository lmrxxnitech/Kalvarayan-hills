const gallery = [
    {
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=srgb&fm=jpg&w=1000&q=85",
        cap: "Sunrise over the ridge",
    },
    {
        src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?crop=entropy&cs=srgb&fm=jpg&w=1000&q=85",
        cap: "Forest road, monsoon",
    },
    {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=srgb&fm=jpg&w=1000&q=85",
        cap: "Shola treeline",
    },
    {
        src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=srgb&fm=jpg&w=1000&q=85",
        cap: "Valley fields",
    },
    {
        src: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?crop=entropy&cs=srgb&fm=jpg&w=1000&q=85",
        cap: "Cliff edge view",
    },
    {
        src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?crop=entropy&cs=srgb&fm=jpg&w=1000&q=85",
        cap: "Mountain lake",
    },
];

export default function Gallery() {
    return (
        <section
            id="gallery"
            data-testid="gallery-section"
            className="bg-[#F8F7F4] py-24 lg:py-40"
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div>
                        <span className="text-[11px] tracking-[0.3em] uppercase text-[#8A9A92]">
                            — Frames from the Hills
                        </span>
                        <h2 className="font-serif text-4xl lg:text-5xl text-[#1A2F24] tracking-tight leading-[1.05] mt-5">
                            A small album,
                            <br />
                            <span className="font-light">
                                no filter required.
                            </span>
                        </h2>
                    </div>
                    <p className="md:text-right text-sm text-[#4A5D53] max-w-xs">
                        Photographs from local guides and travellers, taken on
                        ordinary days.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
                    {gallery.map((g, i) => (
                        <figure
                            key={i}
                            data-testid={`gallery-item-${i}`}
                            className={`group relative overflow-hidden ${
                                i === 0
                                    ? "col-span-2 md:row-span-2 aspect-square md:aspect-auto"
                                    : "aspect-[4/5]"
                            }`}
                        >
                            <img
                                src={g.src}
                                alt={g.cap}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
                            />
                            <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white text-[11px] tracking-[0.18em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                {g.cap}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
