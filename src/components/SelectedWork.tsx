// line 17 18

import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data";

export function SelectedWork() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">/Selected Work</h2>
        </div>
        <div className="flex items-center gap-6 mt-6 md:mt-0">
          <div className="flex items-center gap-4 text-sm font-medium">
            <button className="border-b border-foreground pb-1">All</button>
          </div>

          <Link to="/work" className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-border hover:bg-muted transition-colors text-sm font-medium">
            View All Work
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {projects.map((project, index) => (
          <Link 
            to={`/project/${project.id}`}
            key={project.id}
            className="group block cursor-pointer p-6 md:p-8  bg-[#fafafa] shadow-[16px_16px_32px_#d5d5d5,-16px_-16px_32px_#ffffff] hover:shadow-[inset_8px_8px_16px_#d5d5d5,inset_-8px_-8px_16px_#ffffff] transition-all duration-500"
          >
            <div className="relative overflow-hidden  bg-muted aspect-[4/3] mb-8 shadow-[inset_4px_4px_8px_#d5d5d5,inset_-4px_-4px_8px_#ffffff]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-[#fafafa]/80 backdrop-blur-md text-xs font-bold rounded-full uppercase tracking-wide shadow-[4px_4px_8px_rgba(213,213,213,0.5),-4px_-4px_8px_rgba(255,255,255,0.8)] text-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#fafafa] rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-[8px_8px_16px_#d5d5d5,-8px_-8px_16px_#ffffff]">
                  <ArrowUpRight className="w-6 h-6 text-foreground" />
                </div>
              </div>
            </div>
            <div className="px-2">
              <h3 className="text-2xl font-bold mb-4 text-foreground">{project.title}</h3>
              <div className="flex items-center gap-4">
                <span className="px-5 py-2 bg-[#fafafa] rounded-full text-xs font-bold shadow-[inset_4px_4px_8px_#d5d5d5,inset_-4px_-4px_8px_#ffffff] text-muted-foreground">{project.category}</span>
                <span className="px-5 py-2 bg-[#fafafa] rounded-full text-xs font-bold shadow-[inset_4px_4px_8px_#d5d5d5,inset_-4px_-4px_8px_#ffffff] text-muted-foreground">{project.client}</span>
              </div>
            </div>
          </Link>
        ))}

        
      </div>
    </section>
  );
}
