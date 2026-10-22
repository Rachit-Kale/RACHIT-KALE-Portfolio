import { type ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, FileUser, Instagram, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

export function Contact() {
  return (
    <section 
      id="contact" 
      className="relative py-24 md:py-32 px-6 md:px-12 w-full flex flex-col items-center justify-center min-h-[80vh] overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://i.pinimg.com/736x/ff/c9/63/ffc963dcc45e7e238659201145b0dfda.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Overlay with less transparency (darker overlay so text pops, but image is still visible) */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center text-white h-full justify-between">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center w-full flex-1 justify-center py-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-sm font-medium text-white">Available for New Project</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-6 text-white">
            HAVE A PROJECT IN MIND?
          </h2>
          
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 font-medium drop-shadow-sm">
            Together, we can create something clear and impactful. Let's collaborate to bring our ideas to life in a way that resonates with everyone.
          </p>
          
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-base font-bold hover:bg-white/90 transition-all hover:scale-105 mb-12 md:mb-24 shadow-lg">
            Contact Me
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Footer Area */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/20 mt-auto">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white shadow-sm">
            <img 
              src="/images/my_pic.jpg" 
              alt="Rachit Kale" 
              className="w-6 h-6 rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
            <span className="text-sm font-medium">Rachit Kale</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            <SocialLink icon={<FileUser className="w-4 h-4" />} label="Resume" href="/Rachit_Resume.pdf" />
            <SocialLink icon={<Github className="w-4 h-4" />} label="Github" href="https://github.com/Rachit-Kale" />
            <SocialLink icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" href="https://www.linkedin.com/in/rachit-kale" />
            <SocialLink icon={<Instagram className="w-4 h-4" />} label="Instagram" href="https://www.instagram.com/gk_rachit_27/" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ icon, label, href }: { icon: ReactNode, label: string; href: string; }) {
  const isExternal = href.startsWith('http') || href.endsWith('.pdf');
  return (
    <a 
      href={href} 
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white/30 transition-colors text-sm font-medium text-white bg-white/10 backdrop-blur-md shadow-sm"
    >
      {icon}
      {label}
    </a>
  );
}
