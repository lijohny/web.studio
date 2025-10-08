import { Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <img src={logo} alt="W. Studio" className="h-8 mb-4 invert" />
            <p className="text-white/60 max-w-md">
              Kerala-based IT firm blending creativity, technology, and strategy to help
              businesses thrive online.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/60 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="text-white/60 hover:text-white transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/60 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                target="_blank"
                href="https://www.instagram.com/web_studio.in_/"
                className="w-10 h-10 rounded-full glass-dark flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <Instagram size={18} />
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 rounded-full glass-dark flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-dark flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <Twitter size={18} />
              </a> */}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} W. Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
