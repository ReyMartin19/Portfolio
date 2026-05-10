"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const responsibilities = [
    "Hardware maintenance and preventive maintenance",
    "Helpdesk and technical support",
    "Printer configuration and troubleshooting",
    "Data verification and encoding",
    "Assisted with day-to-day ICT operations",
  ];

  return (
    <section id="experience" className="py-24 relative bg-surface/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4">
            <span className="text-accent font-mono text-xl">02.</span> Experience
            <div className="h-px bg-border flex-1 ml-4" />
          </h2>
        </motion.div>

        <div className="relative border-l border-border ml-4 md:ml-0 md:pl-8 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-background" />

            <div className="bg-surface border border-border rounded-xl p-6 md:p-8 hover:border-accent/50 transition-colors group">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors flex items-center gap-3">
                    <Briefcase size={24} className="text-accent" />
                    Internship
                  </h3>
                  <h4 className="text-lg text-foreground-secondary mt-1">
                    DepEd CAR Regional Office
                  </h4>
                </div>
                <div className="flex items-center gap-2 text-sm text-accent font-mono bg-accent/10 px-4 py-2 rounded-full w-fit">
                  <Calendar size={16} />
                  January 2026 – April 2026
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-foreground-secondary font-medium">Key Responsibilities:</p>
                <ul className="space-y-3">
                  {responsibilities.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3 text-foreground-secondary"
                    >
                      <span className="text-accent mt-1">▹</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
