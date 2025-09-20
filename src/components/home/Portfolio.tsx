'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Section } from '@/components/shared/Section';
import { FadeIn } from '@/components/shared/FadeIn';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type Category = 'All' | 'Design' | 'Develop' | 'Ranking';

const projects = [
  { id: 1, title: 'Creative Branding', category: 'Design', imageId: 'project-1' },
  { id: 2, title: 'Full-Stack E-commerce', category: 'Develop', imageId: 'project-2' },
  { id: 3, title: 'SEO Growth Campaign', category: 'Ranking', imageId: 'project-3' },
  { id: 4, title: 'Mobile App UI/UX', category: 'Design', imageId: 'project-4' },
  { id: 5, title: 'SaaS Platform Build', category: 'Develop', imageId: 'project-5' },
  { id: 6, title: 'Digital Marketing Suite', category: 'Ranking', imageId: 'project-6' },
];

const categories: Category[] = ['All', 'Design', 'Develop', 'Ranking'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const getImage = (imageId: string) => {
    return PlaceHolderImages.find(img => img.id === imageId) || PlaceHolderImages[0];
  }

  return (
    <Section id="portfolio">
      <FadeIn>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline">Our Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the bold, modern, and impactful digital experiences we've crafted.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'secondary'}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'transition-all',
                activeCategory === category && 'button-glow bg-primary hover:bg-primary/90'
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => {
            const imageData = getImage(project.imageId);
            return (
              <Card key={project.id} className="bg-card border-border overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={imageData.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={imageData.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-sm text-primary">{project.category}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </FadeIn>
    </Section>
  );
}
