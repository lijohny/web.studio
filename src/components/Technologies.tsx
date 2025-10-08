import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Technologies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const logosRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      logosRef.current.forEach((logo, index) => {
        gsap.from(logo, {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.05,
          scrollTrigger: {
            trigger: logo,
            start: "top bottom-=50",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "Node.js", category: "Backend" },
    { name: "React Native", category: "Mobile" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Google Cloud", category: "Cloud" },
    { name: "Firebase", category: "Backend" },
    { name: "GraphQL", category: "API" },
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-black rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">Technologies We Master</h2>
          <p className="text-black/60 text-lg max-w-2xl mx-auto">
            We leverage the latest and most powerful technologies to build future-proof digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              ref={(el) => {
                if (el) logosRef.current[index] = el;
              }}
              className="group p-6 rounded-2xl bg-black/5 backdrop-blur-sm border border-black/10 hover:bg-black hover:border-black transition-all duration-500 cursor-pointer flex flex-col items-center justify-center text-center"
            >
              <div className="text-lg font-semibold text-black group-hover:text-white transition-colors mb-2">
                {tech.name}
              </div>
              <div className="text-xs text-black/50 group-hover:text-white/60 transition-colors">
                {tech.category}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-black/60 max-w-3xl mx-auto">
            From cutting-edge frameworks to proven enterprise solutions, we select the best tools for each project. 
            Our team stays updated with the latest tech trends to give you a competitive advantage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
