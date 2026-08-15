export default function About() {
    return (
        <section
            id="about"
            data-testid="about-section"
            className="relative bg-[#F8F7F4] py-24 lg:py-40"
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    <div className="lg:col-span-5">
                        <span className="text-[11px] tracking-[0.3em] uppercase text-[#8A9A92]">
                            — A Quiet Range
                        </span>
                        <h2 className="font-serif text-4xl lg:text-6xl text-[#1A2F24] tracking-tight leading-[1.05] mt-6">
                            Two ranges,
                            <br />
                            <span className="font-light">
                                one slow horizon.
                            </span>
                        </h2>

                        <div className="mt-10 sticky top-32">
                            <img
                                src="https://images.unsplash.com/photo-1504519733529-35b35d10eee2?crop=entropy&cs=srgb&fm=jpg&w=1000&q=85"
                                alt="Valley viewpoint at Kalvarayan"
                                className="w-full h-[420px] object-cover"
                            />
                            <p className="mt-4 text-[11px] tracking-[0.2em] uppercase text-[#8A9A92]">
                                Periya · Chinna Kalrayan
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-7 lg:pl-8">
                        <p className="text-[#1A2F24] text-xl lg:text-2xl font-serif leading-relaxed">
                            The Kalvarayan Hills rise quietly above the plains
                            of Salem, split into the upper{" "}
                            <span className="not-italic font-semibold text-[#C86A53]">Periya Kalrayan</span>{" "}
                            and the lower{" "}
                            <span className="not-italic font-semibold text-[#C86A53]">Chinna Kalrayan</span>
                            — a long, forested spine of the Eastern Ghats home
                            to Malayali tribal villages, coffee terraces and
                            waterfalls older than memory.
                        </p>

                        <p className="mt-8 text-[#4A5D53] text-base leading-relaxed max-w-2xl">
                            Less travelled than its southern neighbours, this
                            range moves at the pace of the people who live in
                            it. Mornings drift in mist. Afternoons hum with
                            jackfruit, pepper vines and orange groves. Evenings
                            settle into woodsmoke and silence. To visit
                            Kalvarayan is to remember how to slow down — and
                            why values, like forests, take generations to grow.
                        </p>

                        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-px bg-[#E2E7E4] border border-[#E2E7E4]">
                            {[
                                { n: "47", l: "Tribal hamlets" },
                                { n: "9", l: "Named waterfalls" },
                                { n: "1,978", l: "Highest peak (m)" },
                                { n: "16°", l: "Coolest mornings" },
                                { n: "3", l: "Trekking trails" },
                                { n: "85 km", l: "From Salem city" },
                            ].map((s) => (
                                <div
                                    key={s.l}
                                    data-testid={`about-stat-${s.l.toLowerCase().replace(/\s+/g, "-")}`}
                                    className="bg-[#F8F7F4] p-6 lg:p-8 flex flex-col"
                                >
                                    <span className="font-serif text-3xl lg:text-4xl text-[#1A2F24]">
                                        {s.n}
                                    </span>
                                    <span className="mt-2 text-[10px] tracking-[0.24em] uppercase text-[#8A9A92]">
                                        {s.l}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
