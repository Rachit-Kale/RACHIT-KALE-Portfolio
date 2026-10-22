import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../data";
import { Navbar } from "../components/Navbar";

export function ProjectPage() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === Number(id));

    if (!project) {
        return (
            <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Link to="/#work" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <main className="bg-[#fafafa] text-foreground min-h-screen pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <Link to="/#work" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24"
                    >
                        {/* Left Column: Details */}
                        <div className="lg:col-span-5 flex flex-col justify-center">
                            <div className="mb-6 flex gap-3 flex-wrap">
                                <span className="px-5 py-2 bg-white rounded-full text-xs font-bold shadow-[inset_4px_4px_8px_#d5d5d5,inset_-4px_-4px_8px_#ffffff] text-muted-foreground">
                                    {project.category}
                                </span>
                                <span className="px-5 py-2 bg-white rounded-full text-xs font-bold shadow-[inset_4px_4px_8px_#d5d5d5,inset_-4px_-4px_8px_#ffffff] text-muted-foreground">
                                    {project.client}
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-display font-bold uppercase tracking-tight mb-8">
                                {project.title}
                            </h1>
                            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="mb-12">
                                <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies?.map((tech) => (
                                        <span key={tech} className="px-4 py-2 bg-white shadow-[4px_4px_8px_#d5d5d5,-4px_-4px_8px_#ffffff] rounded-full text-sm font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-sm font-bold hover:bg-foreground/90 transition-all hover:scale-105 shadow-lg"
                                    >
                                        View Live Project
                                        <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                )}
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-white text-foreground px-8 py-4 rounded-full text-sm font-bold hover:bg-neutral-50 transition-all hover:scale-105 shadow-[4px_4px_8px_#d5d5d5,-4px_-4px_8px_#ffffff]"
                                    >
                                        <Github className="w-5 h-5" />
                                        GitHub Repo
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Right Column: Image */}
                        <div className="lg:col-span-7">
                            <div className="rounded-[2.5rem] p-4 md:p-6 bg-[#fafafa] shadow-[16px_16px_32px_#d5d5d5,-16px_-16px_32px_#ffffff]">
                                <div className="relative overflow-hidden rounded-3xl bg-muted aspect-[4/3] md:aspect-square lg:aspect-[4/5] shadow-[inset_4px_4px_8px_#d5d5d5,inset_-4px_-4px_8px_#ffffff]">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        referrerPolicy="no-referrer"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
        </>
    );
}
