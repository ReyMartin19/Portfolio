"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,var(--surface-secondary)_0%,var(--background)_70%)] opacity-50" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 text-accent mb-6 font-mono text-sm"
        >
          <Terminal size={16} />
          <span>Hello World, I am</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-foreground"
        >
          Rey Martin Agluya.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-foreground-secondary"
        >
          I build engineered web experiences.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg md:text-xl text-foreground-secondary max-w-2xl mb-12 leading-relaxed"
        >
          IT student focused on modern web development, systems, and software engineering. I craft scalable, performance-driven digital solutions with precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-foreground text-background font-medium rounded-sm hover:bg-accent hover:text-background transition-colors flex items-center gap-2 group"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-surface border border-border text-foreground font-medium rounded-sm hover:border-accent hover:text-accent transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Floating terminal visual */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="hidden lg:block absolute right-[-10%] top-1/2 -translate-y-1/2 w-[500px] bg-surface border border-border rounded-lg shadow-2xl overflow-hidden z-0"
      >
        <div className="h-8 bg-surface-secondary flex items-center px-4 border-b border-border gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="p-6 font-mono text-sm text-foreground-secondary space-y-2">
          <p className="text-accent">~ reymartinagluya $ <span className="text-foreground">whoami</span></p>
          <p>Rey Martin Agluya - IT Student & Developer</p>
          <p className="text-accent mt-4">~ reymartinagluya $ <span className="text-foreground">cat skills.json</span></p>
          <p>{"{"}</p>
          <p className="pl-4">{"\"frontend\": [\"Vue\", \"Tailwind CSS\", \"React\", \"Next.js\"],"}</p>
          <p className="pl-4">{"\"backend\": [\"PHP\", \"Laravel\", \"MySQL\"],"}</p>
          <p className="pl-4">{"\"tools\": [\"Git\", \"Hardware Maintenance\"]"}</p>
          <p>{"}"}</p>
          <p className="text-accent mt-4 animate-pulse">_</p>
        </div>
      </motion.div>
    </section>
  );
}
