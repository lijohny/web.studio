import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
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

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO, TechStart Kerala",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
      content: "W. Studio transformed our outdated website into a modern, high-converting platform. Our online sales increased by 340% in just 3 months. Their SEO expertise is unmatched in Kerala!",
      rating: 5,
    },
    {
      name: "Priya Menon",
      role: "Founder, Spice Routes Tourism",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
      content: "The mobile app they developed for our tourism business is absolutely stunning. Bookings have tripled, and our customers love the seamless experience. Highly recommend their mobile development services!",
      rating: 5,
    },
    {
      name: "Arun Nair",
      role: "Marketing Director, Green Valley Resorts",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
      content: "Their digital marketing strategies generated incredible ROI for our resort. Social media engagement up 500%, direct bookings increased 280%. W. Studio truly understands the Kerala market.",
      rating: 5,
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Client Success Stories</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what Kerala's leading businesses say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="glass-dark p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-white text-white" />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-white/80 mb-8 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/20"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-white/60">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
            <div className="text-white/60 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">17+</div>
            <div className="text-white/60 text-sm">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">12+</div>
            <div className="text-white/60 text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">3+</div>
            <div className="text-white/60 text-sm">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
