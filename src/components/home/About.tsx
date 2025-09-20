import Image from 'next/image';
import { Section } from '@/components/shared/Section';
import { FadeIn } from '@/components/shared/FadeIn';

export default function About() {
  return (
    <Section id="about">
      <FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
            <Image
              src="https://picsum.photos/seed/about/800/600"
              alt="Web Studio Team in Kerala"
              fill
              className="object-cover"
              data-ai-hint="office team"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-headline">
              We are <span className="text-primary glitch-text" data-text="W. Studio">W. Studio</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A creative powerhouse based in the heart of Kerala, India. We are a passionate team of designers, developers, and strategists dedicated to blending creativity with technology. Our mission is to forge bold, modern, and impactful digital presences for startups, small businesses, and ambitious creators.
            </p>
            <p className="text-lg text-muted-foreground">
              Let's create something amazing together! 💡
            </p>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
