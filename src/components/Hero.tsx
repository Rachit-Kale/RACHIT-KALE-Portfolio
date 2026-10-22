import { type ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, FileUser, Instagram, Linkedin, Github } from "lucide-react";
import HalftoneReveal from "./HalftoneReveal";

export function Hero() {
  return (
    <section className="relative pt-24 md:pt-48 overflow-hidden w-full bg-background z-10 min-h-screen flex flex-col items-center">

      {/* --- MOBILE LAYOUT --- */}
      <div className="flex md:hidden flex-col items-center w-full px-6 relative z-10 pt-2 pb-16">

        {/* Floating Socials & Image Wrapper */}
        <div className="relative w-[calc(100%+3rem)] -mx-6 aspect-[4/5] mb-6 mt-4">

          {/* Floating Buttons */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="absolute top-[15%] left-[5%] z-30">
            <SocialButton icon={<FileUser className="w-3.5 h-3.5" />} label="Resume" href="/Rachit_Resume.pdf" mobile variant="primary" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="absolute top-[28%] right-[5%] z-30">
            <SocialButton icon={<Github className="w-3.5 h-3.5" />} label="Github" href="https://github.com/Rachit-Kale" mobile />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="absolute bottom-[22%] left-[5%] z-30">
            <SocialButton icon={<Linkedin className="w-3.5 h-3.5" />} label="LinkedIn" href="https://www.linkedin.com/in/rachit-kale" mobile />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="absolute bottom-[10%] right-[5%] z-30">
            <SocialButton icon={<Instagram className="w-3.5 h-3.5" />} label="Instagram" href="https://www.instagram.com/gk_rachit_27/" mobile />
          </motion.div>

          {/* Cutout Image with Bottom Gradient Mask */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative z-20 pointer-events-none"
            style={{
              maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)'
            }}
          >
            <img
              src="/images/rachit_cut.png"
              alt="Rachit Kale"
              className="w-full h-full object-cover object-top grayscale"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center text-center w-full z-30"
        >
          <h1 className="text-[22vw] leading-[0.9] font-display font-bold tracking-tighter uppercase mb-6 flex flex-col text-foreground">
            <span>RACHIT</span>
            <span>KALE</span>
          </h1>

          {/* Relative wrapper container to hold mobile layout text and its background elements securely */}
          <div className="relative w-full flex flex-col items-center justify-center py-4">
            <h2 className="text-[1.35rem] font-bold mb-3 text-foreground z-10 relative">Software Developer</h2>

            {/* Embedded Mobile Portfolio Background Text Layer */}
            <div className="absolute bottom left-0 w-full -translate-y-1 flex justify-between text-[16vw] leading-none font-display font-bold text-black/[0.04] pointer-events-none z-0 select-none tracking-tight">
              {"PORTFOLIO".split("").map((char, i) => (
                <span key={i}>{char}</span>
              ))}
            </div>

            <p className="text-muted-foreground text-[0.95rem] leading-relaxed max-w-[280px] z-10 relative mt-2">
              Crafting powerful digital experiences with clean code, smart solutions and a passion for turning ideas into reality.
            </p>
          </div>
        </motion.div>
      </div>

      {/* --- DESKTOP LAYOUT --- */}
      <div className="hidden md:flex px-6 md:px-12 max-w-7xl mx-auto w-full flex-1 flex flex-col">
        <div className="flex flex-col items-center text-center relative z-10 flex-1">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] leading-none font-display font-bold tracking-tighter uppercase"
          >
            <span className="outline-text">RACHIT</span> KALE
          </motion.h1>

          <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between w-full max-w-7xl pb-32 md:pb-0 z-30">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-left max-w-xs mb-8 md:mb-0"
            >
              <h2 className="text-2xl font-bold mb-2">Software Developer</h2>
              <p className="text-muted-foreground text-sm mb-6">Crafting powerful digital experiences with clean code, smart solutions and a passion for turning ideas into reality.</p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors">
                Let's collaborate
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3 mt-8 md:mt-0 "
            >
              <SocialButton icon={<FileUser className="w-4 h-4" />} label="Resume" href="/Rachit_Resume.pdf" variant="primary" />
              <SocialButton icon={<Github className="w-4 h-4" />} label="Github" href="https://github.com/Rachit-Kale" />
              <SocialButton icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" href="https://www.linkedin.com/in/rachit-kale" />
              <SocialButton icon={<Instagram className="w-4 h-4" />} label="Instagram" href="https://www.instagram.com/gk_rachit_27/" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Absolute positioned image at the bottom center (Desktop Only) */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-[500px] md:w-[600px] md:h-[450px] z-20 cursor-crosshair overflow-hidden pointer-events-auto"
      >
        {/* Base Grayscale Image */}
        <img 
          src="/images/rachit_cut.png" 
          alt="Rachit Kale" 
          className="absolute inset-0 w-full h-full object-cover object-top grayscale"
          referrerPolicy="no-referrer"
        />

        {/* Hover Halftone reveal */}
        <div className="absolute inset-0 w-full h-full">
          <HalftoneReveal
            src="/images/rachit_cut.png"
            trigger="hover"
            mode="color"
            inkColor="#0a0a0a"
            paperColor="#fafafa"
            dotSize={2}
            dotDensity={90}
            className="w-full h-full"
          />
        </div>
      </motion.div>

      {/* Background decorative text (Desktop Only Hidden configuration applied) */}
      <div className="hidden md:flex absolute top-1/2 left-0 w-full -translate-y-1/2 justify-between text-[18vw] leading-none font-display font-bold text-black/[0.04] pointer-events-none z-0 select-none">
        {"PORTFOLIO".split("").map((char, i) => (
          <span key={i}>{char}</span>
        ))}
      </div>
    </section>
  );
}

function SocialButton({ icon, label, href, variant = "outline", mobile }: { icon: ReactNode, label: string, href: string; variant?: "outline" | "primary"; mobile?: boolean }) {
  const isExternal = href.startsWith('http') || href.endsWith('.pdf');
  const targetProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

  if (mobile) {
    const base = "flex items-center gap-2 px-3.5 py-2.5 rounded-full transition-all text-xs font-medium shadow-sm hover:shadow-md pointer-events-auto";
    const styles = {
      outline: "border border-border/60 hover:border-border hover:bg-muted bg-background text-foreground",
      primary: "bg-foreground text-background border border-foreground hover:bg-foreground/90"
    };
    return (
      <a href={href} {...targetProps} className={`${base} ${styles[variant]}`}>
        <div className="flex items-center justify-center">
          {icon}
        </div>
        {label}
      </a>
    );
  }

  const base = "flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-medium transition-colors";
  const styles = {
    outline: "border-3 border-border hover:bg-muted",
    primary: "bg-foreground text-background border border-foreground hover:bg-foreground/90"
  };
  return (
    <a href={href} {...targetProps} className={`${base} ${styles[variant]}`}>
      {icon}
      {label}
    </a>
  );
}
