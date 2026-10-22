import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects, yearsOfExperience } from "../data";


export function About() {
    return (
        <section
            id="about"
            className="py-32 bg-[#0a0a0a] text-white relative overflow-hidden z-10 w-full"
        >
            <div className="px-6 md:px-12 max-w-5xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-white/10 pb-8">
                    <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">/ABOUT ME</h2>
                    <p className="text-white/50 mt-4 md:mt-0 text-lg">Crafting Digital Experiences</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl md:text-4xl font-display font-bold uppercase leading-tight mb-8">
                            I BLEND <span className="text-white/50">AESTHETICS</span> WITH <span className="text-white/50">LOGIC</span> TO BUILD DIGITAL PRODUCTS THAT MATTER.
                        </h3>
                        <p className="text-white/70 text-lg leading-relaxed mb-8">
                            With a background in both design and engineering, I bridge the gap between form and function. I believe that great design is not just about how something looks, but how it works. My goal is to create intuitive, accessible, and memorable experiences that leave a lasting impact.
                        </p>

                        <a href="/#contact" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-bold hover:bg-white/90 transition-all hover:scale-105 shadow-lg">
                            Let's Talk
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white/5 p-4 border border-white/10">
                            <img
                                src="/images/GitHub Readme.png"
                                alt="Portrait"
                                className="w-full h-full object-cover rounded-[2rem] "
                                referrerPolicy="no-referrer"
                            />
                        </div>

                        {/* Floating stats badges */}
                        <div className="absolute -bottom-8 -left-8 bg-[#151515] p-6 rounded-3xl border border-white/10 shadow-2xl">
                            <div className="text-4xl font-display font-bold mb-1">{projects.length}+</div>
                            <div className="text-sm text-white/50 font-medium uppercase tracking-wider">Projects Delivered</div>
                        </div>

                        <div className="absolute top-12 -right-8 bg-[#151515] p-6 rounded-3xl border border-white/10 shadow-2xl">
                            <div className="text-4xl font-display font-bold mb-1">{yearsOfExperience.years}</div>
                            <div className="text-sm text-white/50 font-medium uppercase tracking-wider">Years Experience</div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background decorative text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-display font-bold text-white/[0.03] whitespace-nowrap pointer-events-none z-0 select-none">
                ABOUT ME
            </div>
        </section>
    );
}
