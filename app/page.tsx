import { BentoGrid } from "@/components/bento/BentoGrid";
import { HeaderProfile } from "@/components/HeaderProfile";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--surface-secondary)_0%,var(--background)_70%)] opacity-30 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 sm:pt-16 sm:pb-12 space-y-12 sm:space-y-16 relative z-10">
        <HeaderProfile />

        <BentoGrid />

        <p className="text-center text-[10px] font-mono text-foreground-secondary/40 pt-2">
          © {new Date().getFullYear()} Rey Martin Agluya
        </p>
      </div>
    </main>
  );
}
