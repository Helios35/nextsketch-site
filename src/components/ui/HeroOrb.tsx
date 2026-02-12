'use client';

export function HeroOrb() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      {/* Primary large orb — purple core, floating */}
      <div className="absolute h-[600px] w-[600px] animate-float rounded-full bg-brand-primary/20 blur-[120px]" />
      {/* Secondary orb — pink accent, offset, slower float */}
      <div className="absolute h-[400px] w-[400px] translate-x-16 -translate-y-10 animate-float-reverse rounded-full bg-brand-accent/15 blur-[100px]" />
      {/* Tertiary smaller orb — adds depth */}
      <div className="absolute h-[250px] w-[250px] -translate-x-20 translate-y-20 animate-float-slow rounded-full bg-brand-primary/10 blur-[80px]" />
      {/* Dark center to create depth/sphere illusion */}
      <div className="absolute h-[200px] w-[200px] rounded-full bg-brand-dark/60 blur-[40px]" />

      {/* Pulsing ring */}
      <div className="absolute h-[300px] w-[300px] animate-glow-pulse rounded-full border border-brand-primary/10" />
      <div className="absolute h-[500px] w-[500px] animate-glow-pulse rounded-full border border-brand-accent/5" style={{ animationDelay: '1.5s' }} />

      {/* Scattered particle dots — animated */}
      <div className="absolute left-[15%] top-[20%] h-1 w-1 animate-pulse-soft rounded-full bg-neutral-400/40" />
      <div className="absolute right-[20%] top-[25%] h-1.5 w-1.5 animate-pulse-soft rounded-full bg-neutral-400/30" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-[30%] left-[25%] h-1 w-1 animate-pulse-soft rounded-full bg-neutral-400/20" style={{ animationDelay: '1s' }} />
      <div className="absolute right-[30%] top-[40%] h-1 w-1 animate-pulse-soft rounded-full bg-brand-accent/30" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-[20%] right-[15%] h-0.5 w-0.5 animate-pulse-soft rounded-full bg-neutral-400/40" style={{ animationDelay: '2s' }} />
      <div className="absolute left-[40%] top-[15%] h-0.5 w-0.5 animate-pulse-soft rounded-full bg-neutral-400/30" style={{ animationDelay: '0.7s' }} />
      <div className="absolute bottom-[40%] right-[40%] h-1 w-1 animate-pulse-soft rounded-full bg-neutral-400/20" style={{ animationDelay: '1.2s' }} />
      <div className="absolute left-[10%] top-[60%] h-0.5 w-0.5 animate-pulse-soft rounded-full bg-brand-primary/20" style={{ animationDelay: '1.8s' }} />
      <div className="absolute right-[10%] top-[70%] h-1 w-1 animate-pulse-soft rounded-full bg-neutral-400/25" style={{ animationDelay: '0.3s' }} />
    </div>
  );
}
