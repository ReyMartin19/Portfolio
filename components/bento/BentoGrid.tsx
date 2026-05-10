"use client";

import { BentoCard } from "./BentoCard";
import { ArrowUpRight, MapPin, Mail, Code2, Terminal, Database, Clock, Briefcase, Award, Phone, Languages } from "lucide-react";
import { useEffect, useState } from "react";

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Manila",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span>{time || "--:--"}</span>;
}

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-min sm:auto-rows-[180px] gap-3 sm:gap-4">

      {/* 1. Project Card */}
      <BentoCard className="sm:col-span-2 sm:row-span-2 group/project cursor-pointer min-h-[320px] sm:min-h-0" delay={0.05}>
        {/* Subtle decorative gradient only — no visible text */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-surface-secondary/30 z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-surface to-transparent z-0 pointer-events-none" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Top content */}
          <div className="space-y-4 pb-20 sm:pb-0">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-accent font-mono text-[10px] mb-1 uppercase tracking-widest">Featured Project</p>
                <a 
                  href="https://github.com/ReyMartin19/COCIntel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group/title flex items-center gap-2"
                >
                  <h3 className="text-xl font-bold text-foreground group-hover/title:text-accent transition-colors">ClashIntel</h3>
                  <ArrowUpRight size={14} className="text-foreground-secondary group-hover/title:text-accent transition-all group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5" />
                </a>
              </div>
              <div className="p-2 bg-surface-secondary border border-border rounded-lg">
                <Database className="text-accent" size={16} />
              </div>
            </div>
            
            <p className="text-xs text-foreground-secondary leading-relaxed max-w-[90%]">
              A comprehensive Clash of Clans analytics platform built with Laravel, Vue & MySQL. Track clans, wars, and player statistics in real-time.
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-1.5">
              {["Laravel", "Vue", "MySQL", "API"].map((t) => (
                <span key={t} className="px-2 py-0.5 text-[9px] font-medium bg-surface-secondary/50 border border-border rounded text-foreground-secondary">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom fading footer */}
          <div className="absolute -bottom-6 -left-6 -right-6 h-28 bg-gradient-to-t from-surface via-surface/90 to-transparent flex items-end justify-center sm:justify-start sm:pl-8 pb-8">
            <a 
              href="https://github.com/ReyMartin19" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] font-bold text-accent uppercase tracking-widest group-hover:gap-3 transition-all z-20"
            >
              <span>Check out more</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </BentoCard>

      {/* 2. Experience Card */}
      <BentoCard className="col-span-1 sm:row-span-2 flex flex-col" delay={0.1}>
        <div className="flex items-center gap-2 mb-5">
          <Briefcase className="text-accent" size={17} />
          <h3 className="text-sm font-bold">Experience</h3>
        </div>
        <div className="flex-1 relative border-l border-border/50 ml-1.5 pl-5 space-y-5 overflow-hidden">
          <div className="relative">
            <div className="absolute -left-[27px] top-1 w-2.5 h-2.5 rounded-full bg-accent border-2 border-surface" />
            <p className="text-[10px] text-accent font-mono mb-1">Jan – Apr 2026</p>
            <p className="text-xs font-bold text-foreground">Internship</p>
            <p className="text-[10px] text-foreground-secondary/80 mt-0.5">DepEd CAR Regional Office</p>
            <ul className="mt-2 space-y-1">
              {["Hardware maintenance", "IT support", "System Development"].map((r) => (
                <li key={r} className="text-[10px] text-foreground-secondary/70 flex gap-1.5">
                  <span className="text-accent shrink-0">▹</span>{r}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative opacity-50">
            <div className="absolute -left-[27px] top-1 w-2.5 h-2.5 rounded-full bg-border border-2 border-surface" />
            <p className="text-[10px] text-foreground-secondary font-mono mb-1">2022 – Present</p>
            <p className="text-xs font-bold text-foreground">BS Info Technology</p>
            <p className="text-[10px] text-foreground-secondary/80 mt-0.5">King&apos;s College of the PH</p>
          </div>
        </div>
      </BentoCard>

      {/* 3. Location + Contact */}
      <BentoCard className="col-span-1 sm:row-span-2 flex flex-col justify-between" delay={0.15}>
        {/* Location section */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <MapPin className="text-accent" size={15} />
              <span className="text-xs font-bold text-foreground">Location</span>
            </div>
            <div className="flex items-center gap-1 px-1.5 py-0.5 bg-surface-secondary border border-border rounded text-[10px] font-mono text-foreground-secondary">
              <Clock size={9} />
              <LiveClock />
            </div>
          </div>
          <p className="text-xs font-semibold text-foreground">Bauko, Mtn. Province</p>
          <p className="text-[10px] text-foreground-secondary mt-0.5">Philippines · Asia/Manila</p>
        </div>

        {/* Languages section */}
        <div className="mt-4">
          <div className="flex items-center gap-2 mb-2">
            <Languages className="text-accent" size={14} />
            <span className="text-xs font-bold text-foreground">Languages</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-[10px] text-foreground leading-tight">English · Filipino</p>
            <p className="text-[9px] text-foreground-secondary/70">Ilocano · Kankana-ey</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-2" />

        {/* Contact section */}
        <div className="flex-1 flex flex-col justify-end gap-2.5">
          <div className="flex items-center gap-2">
            <Mail className="text-accent shrink-0" size={15} />
            <span className="text-xs font-bold text-foreground">Contact</span>
          </div>
          <a
            href="mailto:reymartinagluya8@gmail.com"
            className="flex items-center gap-2 text-[10px] text-foreground-secondary hover:text-accent transition-colors group"
          >
            <Mail size={10} className="shrink-0 opacity-50" />
            <span className="break-all">reymartinagluya8@gmail.com</span>
            <ArrowUpRight size={10} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <div className="flex items-center gap-2 text-[10px] text-foreground-secondary">
            <Phone size={10} className="shrink-0 opacity-50" />
            <span>09150326962</span>
          </div>
          <div className="flex gap-2 pt-1">
            <a href="https://github.com/ReyMartin19" target="_blank" rel="noopener noreferrer" className="px-2 py-1 text-[9px] font-medium bg-surface-secondary border border-border rounded text-foreground-secondary hover:text-accent hover:border-accent/50 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/rey-martin-agluya-91a59130a/" target="_blank" rel="noopener noreferrer" className="px-2 py-1 text-[9px] font-medium bg-surface-secondary border border-border rounded text-foreground-secondary hover:text-accent hover:border-accent/50 transition-colors">LinkedIn</a>
            <a href="https://www.facebook.com/reymartin.agluya.5" target="_blank" rel="noopener noreferrer" className="px-2 py-1 text-[9px] font-medium bg-surface-secondary border border-border rounded text-foreground-secondary hover:text-accent hover:border-accent/50 transition-colors">Facebook</a>
          </div>
        </div>
      </BentoCard>

      {/* 4. Tech Stack + Tools */}
      <BentoCard className="col-span-1 sm:col-span-3 sm:row-span-1 flex flex-col justify-between" delay={0.2}>
        <div className="flex flex-col gap-3">
          {/* Tech Stack */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1.5 shrink-0">
              <Code2 size={12} className="text-accent" />
              <span className="text-[10px] font-mono text-foreground-secondary/70">stack</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["Next.js", "Vue", "Laravel", "Tailwind CSS", "PHP", "MySQL", "JavaScript"].map((s) => (
                <span key={s} className="px-2 py-0.5 text-[10px] font-medium bg-surface-secondary text-foreground-secondary border border-border rounded-md hover:border-accent hover:text-foreground transition-colors cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="h-px bg-border" />

          {/* Tools */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1.5 shrink-0">
              <Terminal size={12} className="text-accent" /> 
              <span className="text-[10px] font-mono text-foreground-secondary/70">tools</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["Git", "GitHub", "MS365", "Hardware", "Helpdesk"].map((t) => (
                <span key={t} className="px-2 py-0.5 text-[10px] uppercase tracking-wide bg-surface-secondary text-foreground-secondary border border-border rounded-md hover:border-accent hover:text-foreground transition-colors cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </BentoCard>

      {/* 5. Awards Card */}
      <BentoCard className="col-span-1 row-span-1 flex flex-col justify-start gap-2.5" delay={0.25}>
        <Award className="text-accent" size={17} />
        <div>
          <p className="text-[10px] text-foreground-secondary mb-2">Certifications</p>
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-accent shrink-0" />
              <span className="text-[10px] font-medium text-foreground">PhilNITS – IP</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-accent shrink-0" />
              <span className="text-[10px] font-medium text-foreground">Civil Service Professional</span>
            </div>
          </div>
        </div>
      </BentoCard>



    </div>
  );
}
