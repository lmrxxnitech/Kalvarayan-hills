import { Compass, Mountain, Trees, Coffee, Camera, Tent } from "lucide-react";

const activities = [
    {
        icon: Mountain,
        title: "Trekking",
        text: "Three named trails — beginner walks along plateau ridges, full-day hikes to the highest peak.",
    },
    {
        icon: Compass,
        title: "Sightseeing",
        text: "Loop drives between viewpoints, falls and reservoirs, easily covered across two unhurried days.",
    },
    {
        icon: Trees,
        title: "Forest walks",
        text: "Quiet trails through shola forest with a local guide — birds, butterflies, the occasional gaur.",
    },
    {
        icon: Coffee,
        title: "Plantation visits",
        text: "Coffee, pepper, jackfruit and orange. Smell the soil. Buy directly from the families who tend it.",
    },
    {
        icon: Camera,
        title: "Photography",
        text: "Mist at sunrise, golden hour off the cliffs, and slow exposures at the falls after the rain.",
    },
    {
        icon: Tent,
        title: "Homestays",
        text: "A small but growing network of community-run homestays — meals included, conversations free.",
    },
];

export default function Activities() {
    return (
        <section
            id="activities"
            data-testid="activities-section"
            className="bg-[#E2E7E4]/40 py-24 lg:py-32"
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="max-w-2xl">
                    <span className="text-[11px] tracking-[0.3em] uppercase text-[#8A9A92]">
                        — What you can do
                    </span>
                    <h2 className="font-serif text-4xl lg:text-5xl text-[#1A2F24] tracking-tight leading-[1.05] mt-5">
                        Things to do, slowly.
                    </h2>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A2F24]/10 border border-[#1A2F24]/10">
                    {activities.map((a, i) => {
                        const Icon = a.icon;
                        return (
                            <div
                                key={a.title}
                                data-testid={`activity-${i}`}
                                className="bg-[#F8F7F4] p-9 lg:p-12 group hover:bg-white transition-colors duration-500"
                            >
                                <Icon
                                    size={28}
                                    strokeWidth={1.4}
                                    className="text-[#C86A53] group-hover:scale-110 transition-transform duration-500"
                                />
                                <h3 className="font-serif text-2xl text-[#1A2F24] mt-7">
                                    {a.title}
                                </h3>
                                <p className="text-[#4A5D53] text-sm leading-relaxed mt-3">
                                    {a.text}
                                </p>
                                <span className="mt-6 inline-block text-[10px] tracking-[0.28em] uppercase text-[#8A9A92]">
                                    0{i + 1} / 0{activities.length}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
