import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbulb, Pencil, Code2, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stepsRef.current.forEach((step, index) => {
        gsap.from(step, {
          y: 80,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: step,
            start: "top bottom-=50",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: "01",
      icon: Lightbulb,
      title: "Discovery & Strategy",
      description: "We start by understanding your business goals, target audience, and competition. Deep research ensures we build the right solution.",
    },
    {
      number: "02",
      icon: Pencil,
      title: "Design & Planning",
      description: "Our designers create stunning user interfaces while our architects plan the technical foundation. You'll see prototypes before we code.",
    },
    {
      number: "03",
      icon: Code2,
      title: "Development & Testing",
      description: "Expert developers bring designs to life with clean, scalable code. Rigorous testing ensures everything works perfectly across devices.",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch & Growth",
      description: "We deploy your project smoothly and monitor performance. Ongoing optimization and support keep you ahead of the competition.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Process</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A proven methodology that transforms ideas into successful digital products. Transparent, collaborative, and results-focused.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              ref={(el) => {
                if (el) stepsRef.current[index] = el;
              }}
              className="relative group"
            >
              {/* Connecting Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-white/10 z-0" />
              )}
              
              <div className="relative z-10 glass-dark p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="mb-6">
                  <div className="text-6xl font-bold text-white/10 mb-4">{step.number}</div>
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-white/60 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
