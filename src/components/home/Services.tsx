import { Paintbrush, Code, TrendingUp } from 'lucide-react';
import { Section } from '@/components/shared/Section';
import { FadeIn } from '@/components/shared/FadeIn';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Paintbrush,
    title: 'Design',
    description: 'We craft bold, modern UI/UX, branding, and creative web layouts that captivate and convert.',
  },
  {
    icon: Code,
    title: 'Develop',
    description: 'From web to mobile apps, we build seamless, full-stack digital products that perform flawlessly.',
  },
  {
    icon: TrendingUp,
    title: 'Ranking',
    description: 'Our data-driven SEO, digital marketing, and growth strategies ensure you dominate search rankings.',
  },
];

export default function Services() {
  return (
    <Section id="services" className="bg-secondary/20">
      <FadeIn>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline">Our Core Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Blending creativity, technology, and strategy to build your future online.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border text-center pt-8 hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <service.icon className="h-10 w-10 text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]" />
                </div>
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
