import { motion } from "motion/react";
import { ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="bg-background min-h-screen pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neutral-900 rounded-full blur-[120px] opacity-20 -z-10 translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neutral-800 rounded-full blur-[100px] opacity-20 -z-10 -translate-x-1/3 translate-y-1/3"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tight mb-4">
                            Get in Touch
                        </h1>
                        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
                            I'm always open to new opportunities and collaborations. Fill out the form below and I'll get back to you as soon as possible.
                        </p>

                        <form
                            action="https://formsubmit.co/rachitkale05@gmail.com"
                            method="POST"
                            className="space-y-8"
                        >
                            {/* Optional: Configuration for FormSubmit to return back to site or show success */}
                            <input type="hidden" name="_subject" value="New contact from your portfolio!" />
                            <input type="hidden" name="_captcha" value="false" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full bg-transparent border-b border-border py-4 outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50 text-lg"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full bg-transparent border-b border-border py-4 outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50 text-lg"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="_subject"
                                    required
                                    className="w-full bg-transparent border-b border-border py-4 outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50 text-lg"
                                    placeholder="How can I help you?"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full bg-transparent border-b border-border py-4 outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50 text-lg resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="group flex items-center justify-center gap-3 w-full md:w-auto bg-foreground text-background px-10 py-5 rounded-full font-bold uppercase tracking-wide hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95"
                            >
                                Send Message
                                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </main>
        </>
    );
}