import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={textRef}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About W. Studio
            </h2>
            <div className="space-y-6 text-white/70 text-lg">
              <p>
                Based in the heart of Kerala, W. Studio is your trusted IT partner for transforming digital dreams into reality. We're a passionate team of designers, developers, SEO experts, and digital marketing strategists who live and breathe innovation.
              </p>
              <p>
                Since our inception, we've been on a mission to empower Kerala businesses with world-class digital solutions. From responsive websites and powerful mobile apps to data-driven SEO strategies and result-oriented digital marketing campaigns—we do it all.
              </p>
              <p>
                Our approach is simple: understand your business deeply, craft tailored solutions using cutting-edge technology, and deliver measurable results that exceed expectations. Whether you're a startup taking your first digital steps or an established brand looking to scale, we bring the same dedication, creativity, and technical excellence to every project.
              </p>
              <p>
                We don't just build digital products—we build lasting partnerships. Your success is our success, and we're committed to helping your business thrive in the digital age.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-white mb-2">17+</div>
                <div className="text-white/60 text-sm">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">12+</div>
                <div className="text-white/60 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">3+</div>
                <div className="text-white/60 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="aspect-square rounded-3xl glass-dark p-1 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800"
                alt="Team collaboration"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full glass-dark blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full glass-dark blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
