export default function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-surface-secondary/50">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground-secondary font-mono">
          © {new Date().getFullYear()} Rey Martin Agluya. All rights reserved.
        </p>
        <p className="text-sm text-foreground-secondary flex items-center gap-2">
          Built with <span className="text-foreground">Next.js</span> & <span className="text-foreground">Tailwind</span>. Deployed on <span className="text-foreground">Vercel</span>.
        </p>
      </div>
    </footer>
  );
}
