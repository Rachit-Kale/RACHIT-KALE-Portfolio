import { experiences } from "../data";
import { FlowingMenu } from "./FlowingMenu";

export function Experience() {
  return (
    <section 
      id="experience" 
      className="py-32 bg-[#0a0a0a] text-white relative overflow-hidden"
    >
      <div className="px-6 md:px-12 max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-white/10 pb-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">/EXPERIENCE</h2>
          <p className="text-white/50 mt-4 md:mt-0 text-lg">1+ years of experience</p>
        </div>

        <div className="relative">
          <FlowingMenu items={experiences} speed={15} />
        </div>
      </div>
      
      {/* Background decorative text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-display font-bold text-white/[0.04] whitespace-nowrap pointer-events-none z-0 select-none">
        EXPERIENCE
      </div>
    </section>
  );
}
