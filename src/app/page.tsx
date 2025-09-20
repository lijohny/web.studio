import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import Portfolio from '@/components/home/Portfolio';
import SeoBoost from '@/components/home/SeoBoost';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <SeoBoost />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
