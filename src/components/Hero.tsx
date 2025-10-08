import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const floatingRef1 = useRef<HTMLDivElement>(null);
  const floatingRef2 = useRef<HTMLDivElement>(null);
  const floatingRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero fade in
      gsap.from(heroRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      // Title animation
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      });

      // Subtitle animation
      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      });

      // CTA animation
      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.9,
        ease: "power3.out",
      });

      // Floating elements
      gsap.to(floatingRef1.current, {
        y: -30,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      gsap.to(floatingRef2.current, {
        y: 40,
        x: 30,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 0.5,
      });

      gsap.to(floatingRef3.current, {
        y: -25,
        x: -20,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source
            src="https://cdn.pixabay.com/video/2022/12/11/142836-779863015_large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Floating Elements */}
      <div
        ref={floatingRef1}
        className="absolute top-1/4 left-10 w-32 h-32 rounded-full glass-dark blur-2xl"
      />
      <div
        ref={floatingRef2}
        className="absolute bottom-1/4 right-20 w-40 h-40 rounded-full glass-dark blur-2xl"
      />
      <div
        ref={floatingRef3}
        className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full glass-dark blur-2xl"
      />

      {/* Content */}
      <div className="container mx-auto px-6 z-20 relative">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            We Create
            <br />
            <span className="text-gradient">Digital Excellence</span>
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light"
          >
            Kerala-based IT firm blending creativity, technology, and strategy to help
            businesses thrive in the digital world.
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 transition-all duration-300 group px-8"
            >
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass border-white/20 text-white hover:bg-white/10 px-8"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
