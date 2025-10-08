import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-black rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">Let's Connect</h2>
          <p className="text-black/60 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Get in touch with us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div ref={formRef} className="glass-dark p-8 md:p-12 rounded-3xl">
            <h3 className="text-2xl font-semibold text-white mb-8">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-all"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-all resize-none"
                />
              </div>
              <Button className="w-full bg-white text-black hover:bg-white/90 py-6 text-lg">
                Send Message
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="font-semibold text-black mb-1">Email</h4>
                <p className="text-black/60">w.spacesonwebstudio@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="font-semibold text-black mb-1">Phone</h4>
                <p className="text-black/60">+91 8137844372</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="font-semibold text-black mb-1">Location</h4>
                <p className="text-black/60">Kochi,Kerala, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
