import React from "react";
import { ExternalLink, Code } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "FoodFlow",
    category: "Full Stack App",
    description:
      "A comprehensive food delivery management system optimizing restaurant workflows. Built with the same Dark Blue & Orange theme.",
    tech: ["React", "Node.js", "Tailwind"],
    link: "#",
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    category: "UI/UX Design",
    description:
      "Analytics dashboard for online retailers with real-time data visualization.",
    tech: ["Vue.js", "Firebase", "D3.js"],
    link: "#",
  },
  {
    id: 3,
    title: "TaskMaster",
    category: "Productivity",
    description: "A collaborative task management tool for remote teams.",
    tech: ["React Native", "Redux"],
    link: "#",
  },
];

const Works = () => {
  return (
    <section className="py-24 pt-32 bg-brand-dark min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Selected Works
          </h2>
          <div className="w-20 h-1 bg-brand-orange"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-brand-orange/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 bg-slate-800 relative overflow-hidden flex items-center justify-center">
                <Code
                  className="text-slate-600 group-hover:text-brand-orange transition-colors"
                  size={48}
                />
              </div>
              <div className="p-6">
                <span className="text-brand-orange text-xs font-bold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-brand-dark text-slate-300 text-xs rounded border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-white hover:text-brand-orange font-medium transition-colors"
                >
                  View Project <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
