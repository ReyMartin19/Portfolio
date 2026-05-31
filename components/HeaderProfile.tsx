"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BadgeCheck, Mail, FileText, Sun, Moon, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export function HeaderProfile() {
  const { theme, toggle } = useTheme();
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEmailClick = (e: React.MouseEvent) => {
    // We still allow the default mailto behavior, 
    // but we also copy to clipboard for convenience
    navigator.clipboard.writeText("reymartinagluya8@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-row gap-5 items-center w-full"
    >
      {/* Profile Picture */}
      <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 bg-surface-secondary rounded-xl border border-border overflow-hidden flex items-center justify-center">
        {mounted ? (
          <Image 
            src={theme === "light" ? "/profile_night.png" : "/profile_morning.png"} 
            alt="Rey Martin Agluya" 
            width={96}
            height={96}
            priority
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        ) : (
          <div className="w-full h-full animate-pulse bg-surface-secondary" />
        )}
      </div>

      {/* Profile Details */}
      <div className="flex-1 min-w-0">

        {/* Row 1: Name + Theme Toggle */}
        <div className="flex items-center justify-between gap-x-4 mb-1">
          <div className="flex items-center gap-2 min-w-0">
            <h1 className="text-xl md:text-3xl font-bold tracking-tight text-foreground truncate">
              Rey Martin Agluya
            </h1>
            <BadgeCheck className="text-background fill-blue-500 shrink-0" size={20} />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-surface border border-border rounded-md text-foreground-secondary hover:text-foreground hover:border-accent/50 transition-all shrink-0 min-w-[65px] justify-center"
          >
            {mounted ? (
              <>
                {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
                <span className="text-[10px] font-medium">{theme === "dark" ? "Light" : "Dark"}</span>
              </>
            ) : (
              <div className="w-10 h-3 animate-pulse bg-surface-secondary rounded" />
            )}
          </button>
        </div>

        {/* Row 2: Roles */}
        <div className="mb-1.5">
          <p className="text-foreground-secondary text-xs md:text-base font-medium truncate">
            IT Student <span className="mx-1 opacity-50">\</span> Laravel Fanatic
          </p>
        </div>



        {/* Row 3: Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="mailto:reymartinagluya8@gmail.com?subject=Project%20Inquiry%20-%20Portfolio"
            onClick={handleEmailClick}
            className="flex items-center gap-1.5 border border-border text-foreground hover:bg-surface-secondary transition-colors px-3 py-2 rounded-sm font-semibold text-xs relative group"
          >
            {copied ? (
              <>
                <Check size={13} className="text-green-500" />
                <span className="text-green-500">Email Copied!</span>
              </>
            ) : (
              <>
                <Mail size={13} />
                <span>Send Email</span>
              </>
            )}
          </a>

          <a
            href="https://github.com/ReyMartin19"
            target="_blank"
            rel="noopener noreferrer"
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
