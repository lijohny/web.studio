import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/shared/FadeIn';
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* 🔹 Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/hero-bg.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* 🔹 Content */}
      <FadeIn className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="mt-8 text-4xl md:text-6xl font-bold font-headline tracking-tighter">
          Let’s create something amazing! <span className="text-glow">💡</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          We are a Kerala-based IT firm that blends creativity, technology, and strategy to help businesses thrive online.
        </p>
        <a href="#contact">
          <Button
            size="lg"
            className="mt-8 button-glow bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Start a Project
          </Button>
        </a>
      </FadeIn>
    </section>
  );
}
