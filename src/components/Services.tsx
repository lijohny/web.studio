import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Palette, Rocket, Smartphone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom responsive websites, eCommerce platforms, and progressive web apps built with React, Next.js, and modern frameworks. Fast, secure, and scalable solutions.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native iOS and Android apps, cross-platform solutions with React Native. User-friendly interfaces with seamless performance and cloud integration.",
    },
    {
      icon: Rocket,
      title: "SEO & Optimization",
      description: "Rank higher on Google with our proven SEO strategies. Technical SEO, keyword optimization, content strategy, and local SEO for Kerala businesses.",
    },
    {
      icon: Palette,
      title: "Digital Marketing",
      description: "Complete digital marketing solutions including social media management, Google Ads, content marketing, and email campaigns. Drive traffic and boost conversions.",
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-black rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">Our Core Services</h2>
          <p className="text-black/60 text-lg max-w-2xl mx-auto">
            Comprehensive IT solutions tailored for Kerala businesses. From concept to launch, we deliver digital excellence that drives real results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group p-8 rounded-3xl bg-black/5 backdrop-blur-sm border border-black/10 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer"
            >
              <service.icon className="w-12 h-12 mb-6 text-black group-hover:text-white transition-colors" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-black/60 group-hover:text-white/70 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
