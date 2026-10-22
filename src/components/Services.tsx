import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { services } from "../data";
import { cn } from "../lib/utils";

export function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section id="service" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-12">/Service</h2>
      
      <div className="flex flex-col gap-4">
        {services.map((service) => {
          const isActive = activeService === service.id;
          
          return (
            <div 
              key={service.id}
              onClick={() => setActiveService(isActive ? null : service.id)}
              className={cn(
                "group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer border border-border",
                isActive ? "bg-foreground text-background" : "bg-background hover:bg-muted"
              )}
            >
              <div className="p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex-1">
                  <h3 className={cn(
                    "text-3xl md:text-4xl font-display font-bold uppercase tracking-tight transition-colors",
                    isActive ? "text-background" : "text-foreground"
                  )}>
                    {service.title}
                  </h3>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-background/80 max-w-md text-lg">
                          {service.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-8">
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: 20 }}
                        className="hidden md:block w-64 h-40 rounded-xl overflow-hidden rotate-3 shadow-2xl"
                      >
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="w-12 h-12 rounded-full flex items-center justify-center border border-current opacity-50 group-hover:opacity-100 transition-opacity">
                    {isActive ? (
                      <X className="w-6 h-6" />
                    ) : (
                      <ArrowUpRight className="w-6 h-6" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Background decorative text */}
      <div className="absolute top-1/4 left-0 text-[15vw] font-display font-bold text-black/[0.02] whitespace-nowrap pointer-events-none z-[-1]">
        SERVICE
      </div>
    </section>
  );
}
