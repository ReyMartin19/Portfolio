"use client";

import { motion } from "framer-motion";
import { Code2, Database, LayoutTemplate, Server } from "lucide-react";

export default function About() {
  const interests = [
    { name: "Web Development", icon: <Code2 size={20} /> },
    { name: "System Development", icon: <Server size={20} /> },
    { name: "Laravel Ecosystem", icon: <Database size={20} /> },
    { name: "Backend Architecture", icon: <Server size={20} /> },
    { name: "UI/UX Implementation", icon: <LayoutTemplate size={20} /> },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-accent font-mono text-xl">01.</span> About Me
            <div className="h-px bg-border flex-1 ml-4" />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-foreground-secondary leading-relaxed"
          >
            <p>
              I am a <strong className="text-foreground">BS Information Technology</strong> student at <strong className="text-foreground">King’s College of the Philippines</strong>, driven by a passion for engineering robust digital solutions.
            </p>
            <p>
              My journey in tech combines academic rigor with practical application, notably through my internship at the <strong className="text-accent">DepEd CAR Regional Office</strong>. There, I gained hands-on experience in IT operations, systems support, and data management.
            </p>
            <p>
              I approach development with a systems-level mindset—focusing not just on making things look good, but ensuring they perform exceptionally well under the hood. I am constantly expanding my knowledge in modern frameworks and architectural patterns to build scalable software.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-surface border border-border rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-foreground">Core Interests</h3>
              <ul className="space-y-4">
                {interests.map((interest, index) => (
                  <motion.li
                    key={interest.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 group cursor-default"
                  >
                    <div className="p-2 bg-surface-secondary text-accent rounded-md group-hover:scale-110 group-hover:bg-accent group-hover:text-background transition-all">
                      {interest.icon}
                    </div>
                    <span className="font-medium text-foreground-secondary group-hover:text-foreground transition-colors">
                      {interest.name}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
