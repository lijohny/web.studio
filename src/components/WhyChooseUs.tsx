import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Clock, HeadphonesIcon, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1,
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

  const reasons = [
    {
      icon: Award,
      title: "Kerala's Trusted IT Partner",
      description: "5+ years serving businesses across Kerala with proven expertise in delivering high-quality digital solutions that drive measurable growth.",
    },
    {
      icon: TrendingUp,
      title: "Results-Driven Approach",
      description: "We don't just build websites and apps—we create growth engines. Our data-driven strategies deliver average ROI increases of 200-400%.",
    },
    {
      icon: Clock,
      title: "On-Time Delivery, Every Time",
      description: "95% of our projects are delivered on or ahead of schedule. We respect your time and business goals with transparent project management.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support & Maintenance",
      description: "Your success is ongoing. Enjoy round-the-clock technical support, regular updates, and continuous optimization of your digital assets.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-black rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-black rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">Why Choose W. Studio?</h2>
          <p className="text-black/60 text-lg max-w-2xl mx-auto">
            Partner with Kerala's most innovative IT company. We combine local expertise with global standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="flex gap-6 p-8 rounded-3xl bg-black/5 backdrop-blur-sm border border-black/10 hover:bg-black/10 transition-all duration-500"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-3">{reason.title}</h3>
                <p className="text-black/60 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
