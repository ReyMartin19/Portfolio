"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, Database, Layout, Server, LineChart } from "lucide-react";

export default function Projects() {
  const highlights = [
    { name: "Laravel", icon: <Server size={14} /> },
    { name: "Vue", icon: <Layout size={14} /> },
    { name: "MySQL", icon: <Database size={14} /> },
    { name: "Analytics Dashboard", icon: <LineChart size={14} /> },
    { name: "API Integration", icon: <Database size={14} /> },
    { name: "Responsive Design", icon: <Layout size={14} /> },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4">
            <span className="text-accent font-mono text-xl">03.</span> Featured Projects
            <div className="h-px bg-border flex-1 ml-4" />
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Project Image/Mockup Area */}
            <div className="lg:col-span-7 relative z-10">
              <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden border border-border bg-surface-secondary flex items-center justify-center group-hover:border-accent/50 transition-all duration-500">
                <div className="absolute inset-0 bg-accent/10 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 z-10" />
                
                {/* Fallback visual if no image is available yet, giving a developer feel */}
                <div className="p-8 text-center flex flex-col items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-700">
                  <Database size={64} className="text-accent mb-4 opacity-50" />
                  <div className="font-mono text-xs text-foreground-secondary/70 space-y-2">
                    <p>GET /api/v1/clans/search</p>
                    <p>{"{"}</p>
                    <p className="pl-4">{"\"status\": \"success\","}</p>
                    <p className="pl-4">{"\"data\": {"}</p>
                    <p className="pl-8">{"\"name\": \"ClashIntel\","}</p>
                    <p className="pl-8">{"\"level\": 10"}</p>
                    <p className="pl-4">{"}"}</p>
                    <p>{"}"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Content Area */}
            <div className="lg:col-span-5 relative z-20 flex flex-col lg:items-end lg:text-right">
              <p className="text-accent font-mono text-sm mb-2">Featured Project</p>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 group-hover:text-accent transition-colors">
                ClashIntel
              </h3>

              <div className="bg-surface p-6 md:p-8 rounded-xl border border-border shadow-xl mb-6 lg:-ml-20 relative z-30 group-hover:border-accent/30 transition-colors">
                <p className="text-foreground-secondary leading-relaxed">
                  A comprehensive Clash of Clans analytics platform that allows players to seamlessly search and track clan, war, and player information in real-time.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 lg:justify-end mb-8 z-20">
                {highlights.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-foreground-secondary bg-surface-secondary border border-border rounded-md hover:text-accent hover:border-accent/50 transition-colors"
                  >
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 items-center text-foreground-secondary z-20">
                <a href="#" className="hover:text-accent transition-colors p-2" aria-label="GitHub Repository">
                  <Code size={22} />
                </a>
                <a href="#" className="hover:text-accent transition-colors p-2" aria-label="Live Demo">
                  <ExternalLink size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
