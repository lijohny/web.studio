import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=80",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=800",
      description: "Full-featured online store with payment integration",
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800",
      description: "iOS & Android app for patient management",
    },
    {
      title: "Tourism Website Redesign",
      category: "SEO & Web Design",
      image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&w=800",
      description: "Kerala tourism site with 300% traffic increase",
    },
    {
      title: "Restaurant Digital Campaign",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=800",
      description: "Social media strategy with 500% ROI growth",
    },
    {
      title: "Real Estate Portal",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800",
      description: "Property listing platform with virtual tours",
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800",
      description: "Cross-platform fitness and nutrition tracker",
    },
  ];

  return (
    <section id="work" ref={sectionRef} className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Work</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful projects across Kerala and beyond. Real results for real businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              </div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="mb-3">
                  <span className="text-white/60 text-sm font-medium">{project.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 text-sm mb-4">{project.description}</p>
                
                <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-sm font-medium">View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
