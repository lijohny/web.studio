'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Section } from '@/components/shared/Section';
import { FadeIn } from '@/components/shared/FadeIn';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { optimizeContent } from '@/ai/flows/optimize-existing-content';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

export default function SeoBoost() {
  const [content, setContent] = useState('');
  const [keywords, setKeywords] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!content) {
      setError('Please enter some content to analyze.');
      return;
    }
    setError(null);
    setIsLoading(true);
    setKeywords([]);

    try {
      const result = await optimizeContent({ content });
      setKeywords(result.keywords.split(',').map(k => k.trim()).filter(Boolean));
    } catch (e) {
      setError('Failed to generate keywords. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section id="seo-boost">
      <FadeIn>
        <Card className="bg-gradient-to-br from-primary/10 via-background to-background border-primary/20">
          <CardHeader className="text-center">
            <div className="w-fit mx-auto p-3 bg-primary/20 rounded-full mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-4xl md:text-5xl font-bold font-headline">Free SEO Boost</CardTitle>
            <CardDescription className="text-lg max-w-2xl mx-auto">
              Paste your content below and let our AI suggest relevant keywords to enhance your search rankings.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-w-3xl mx-auto">
              <Textarea
                placeholder="Enter your page content here..."
                rows={8}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="bg-background/50"
              />
              <Button onClick={handleGenerate} disabled={isLoading} className="w-full button-glow bg-primary hover:bg-primary/90">
                {isLoading ? 'Generating...' : 'Generate Keywords'}
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
              {error && <p className="text-sm text-destructive text-center">{error}</p>}

              {(isLoading || keywords.length > 0) && (
                 <div className="pt-6">
                    <h4 className="text-lg font-semibold mb-4 text-center">Suggested Keywords:</h4>
                    {isLoading ? (
                      <div className="flex flex-wrap justify-center gap-2">
                        {[...Array(8)].map((_, i) => <Skeleton key={i} className="h-8 w-24" />)}
                      </div>
                    ) : (
                      <div className="flex flex-wrap justify-center gap-2">
                        {keywords.map((keyword, index) => (
                          <Badge key={index} variant="secondary" className="text-base px-4 py-1 border-primary/50 text-foreground">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    )}
                 </div>
              )}
            </div>
          </CardContent>
        </Card>
      </FadeIn>
    </Section>
  );
}
