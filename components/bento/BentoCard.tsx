"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export function BentoCard({ className, children, delay = 0 }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-surface border border-border p-6 shadow-sm hover:border-accent/40 transition-colors duration-500",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
}
