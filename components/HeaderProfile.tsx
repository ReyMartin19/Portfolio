"use client";

import { BadgeCheck, Mail, FileText, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export function HeaderProfile() {
  const { theme, toggle } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-row gap-5 items-center w-full"
    >
      {/* Profile Picture Placeholder */}
      <div className="w-24 h-24 shrink-0 bg-surface-secondary rounded-xl border border-border overflow-hidden flex items-center justify-center text-foreground-secondary/40">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      </div>

      {/* Profile Details */}
      <div className="flex-1 min-w-0">

        {/* Row 1: Name + Theme Toggle */}
        <div className="flex items-center justify-between gap-x-4 mb-1">
          <div className="flex items-center gap-2 min-w-0">
            <h1 className="text-2xl font-bold tracking-tight text-foreground truncate">
              Rey Martin Agluya
            </h1>
            <BadgeCheck className="text-background fill-blue-500 shrink-0" size={20} />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-surface border border-border rounded-md text-foreground-secondary hover:text-foreground hover:border-accent/50 transition-all shrink-0"
          >
            {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
            <span className="text-[10px] font-medium">{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
        </div>

        {/* Row 2: Roles */}
        <div className="mb-3">
          <p className="text-foreground-secondary text-sm font-medium">
            IT Student <span className="mx-1 opacity-50">\</span> Developer <span className="mx-1 opacity-50">\</span> Systems Engineer
          </p>
        </div>

        {/* Row 3: Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="mailto:reymartinagluya8@gmail.com"
            className="flex items-center gap-1.5 border border-border text-foreground hover:bg-surface-secondary transition-colors px-3 py-2 rounded-sm font-semibold text-xs"
          >
            <Mail size={13} />
            <span>Send Email</span>
          </a>

          <a
            href="#projects"
            className="flex items-center gap-1.5 border border-border text-foreground hover:bg-surface-secondary transition-colors px-3 py-2 rounded-sm font-semibold text-xs"
          >
            <FileText size={13} />
            <span>View Projects</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
