"use client";

import { motion } from "framer-motion";
import { Code, Database, Wrench, Award, Globe } from "lucide-react";

export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      icon: <Code size={20} />,
      skills: ["Vue", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Backend",
      icon: <Database size={20} />,
      skills: ["PHP", "Laravel", "MySQL"],
    },
    {
      title: "Tools & Technical",
      icon: <Wrench size={20} />,
      skills: ["Git", "GitHub", "MS365", "Hardware Maintenance"],
    },
    {
      title: "Awards & Certs",
      icon: <Award size={20} />,
      skills: ["PhilNITS - IP", "Civil Service Professional"],
    },
    {
      title: "Languages",
      icon: <Globe size={20} />,
      skills: ["English", "Tagalog", "Kankana-ey", "Ilocano"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <section id="skills" className="py-24 relative bg-surface/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4">
            <span className="text-accent font-mono text-xl">04.</span> Skills & Expertise
            <div className="h-px bg-border flex-1 ml-4" />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
                <div className="p-2 bg-surface-secondary text-accent rounded-lg group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    className="px-3 py-1.5 text-sm font-medium bg-surface-secondary text-foreground-secondary border border-border rounded-full hover:text-accent hover:border-accent/50 cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
