import { BentoGrid } from "@/components/bento/BentoGrid";
import { HeaderProfile } from "@/components/HeaderProfile";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-4 md:p-8 flex items-center justify-center relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--surface-secondary)_0%,var(--background)_70%)] opacity-30 pointer-events-none" />
      
      <div className="max-w-5xl w-full relative z-10 py-8 space-y-6">
        <HeaderProfile />

        <div className="h-px bg-border" />

        <BentoGrid />

        <p className="text-center text-[10px] font-mono text-foreground-secondary/40 pt-2">
          © {new Date().getFullYear()} Rey Martin Agluya
        </p>
      </div>
    </main>
  );
}
