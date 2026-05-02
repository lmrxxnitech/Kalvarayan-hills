export default function Footer() {
    return (
        <footer
            data-testid="site-footer"
            className="bg-[#0d1a14] text-[#E2E7E4] py-16"
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    <div className="md:col-span-6">
                        <p className="font-serif text-3xl italic">
                            Kalvarayan hills
                        </p>
                        <p className="text-[10px] tracking-[0.32em] uppercase text-[#8A9A92] mt-1">
                            in salem
                        </p>
                        <p className="mt-6 text-sm text-[#E2E7E4]/70 max-w-md leading-relaxed">
                            A community-led tourism initiative for the upper
                            and lower Kalvarayan ranges. Travel slowly. Buy
                            local. Leave no trace.
                        </p>
                    </div>
                    <div className="md:col-span-3">
                        <p className="text-[10px] tracking-[0.28em] uppercase text-[#8A9A92]">
                            Explore
                        </p>
                        <ul className="mt-5 space-y-3 text-sm">
                            <li>
                                <a
                                    href="#about"
                                    className="hover:text-[#C86A53] transition-colors"
                                >
                                    About the hills
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#attractions"
                                    className="hover:text-[#C86A53] transition-colors"
                                >
                                    Attractions
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#activities"
                                    className="hover:text-[#C86A53] transition-colors"
                                >
                                    Activities
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#reach"
                                    className="hover:text-[#C86A53] transition-colors"
                                >
                                    How to reach
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-3">
                        <p className="text-[10px] tracking-[0.28em] uppercase text-[#8A9A92]">
                            Contact
                        </p>
                        <ul className="mt-5 space-y-3 text-sm">
                            <li>hello@kalvarayanhills.in</li>
                            <li>+91 98000 00000</li>
                            <li>Salem District, Tamil Nadu</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-[#E2E7E4]/50">
                    <p>© {new Date().getFullYear()} Kalvarayan hills in salem. All rights reserved.</p>
                    <p>Build values for the Future.</p>
                </div>
            </div>
        </footer>
    );
}
