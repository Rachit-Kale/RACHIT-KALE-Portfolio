import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { yearsOfExperience } from "../data";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Hide navbar when scrolling down, reveal when scrolling up
    if (latest > previous && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-background/80 backdrop-blur-md border-b border-border/40"
    >
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="text-sm font-medium">Available for New Project</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium ">
        <a href="/#about" className="hover:text-gray-600 transition-colors">About</a>
        <a href="/#work" className="hover:text-gray-600 transition-colors">Work <span className="text-gray-400 text-xs ml-1">[4]</span></a>
        <a href="/#service" className="hover:text-gray-600 transition-colors">Service <span className="text-gray-400 text-xs ml-1">[3]</span></a>
        <a href="/#experience" className="hover:text-gray-600 transition-colors">Experience <span className="text-gray-400 text-xs ml-1">[{yearsOfExperience.years}]</span></a>
        <a href="/#contact" className="hover:text-gray-600 transition-colors">Contact</a>
      </div>

      <a href="/#contact" className="hidden md:flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors">
        Let's Talk
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </motion.nav>
  );
}