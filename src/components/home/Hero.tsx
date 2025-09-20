import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/shared/FadeIn';

const AnimatedLogo = () => (
  <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
    <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-20"></div>
    <div className="absolute inset-4 bg-primary/50 rounded-full animate-pulse opacity-30 delay-75"></div>
    <svg viewBox="0 0 200 200" className="relative w-full h-full">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="7" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        className="font-headline font-bold text-9xl fill-foreground"
        style={{ filter: 'url(#glow)' }}
      >
        W.
      </text>
    </svg>
  </div>
);

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-grid-white/[0.05]">
       <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <FadeIn className="z-10 flex flex-col items-center justify-center">
        <AnimatedLogo />
        <h1 className="mt-8 text-4xl md:text-6xl font-bold font-headline tracking-tighter">
          Let’s create something amazing! <span className="text-glow">💡</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          We are a Kerala-based IT firm that blends creativity, technology, and strategy to help businesses thrive online.
        </p>
        <a href="#contact">
          <Button size="lg" className="mt-8 button-glow bg-primary hover:bg-primary/90 text-primary-foreground">
            Start a Project
          </Button>
        </a>
      </FadeIn>
    </section>
  );
}
