'use server';

/**
 * @fileOverview A flow for generating SEO-friendly title and description meta tags.
 *
 * - generateSEOTags - A function that generates SEO tags.
 * - GenerateSEOTagsInput - The input type for the generateSEOTags function.
 * - GenerateSEOTagsOutput - The return type for the generateSEOTags function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSEOTagsInputSchema = z.object({
  pageContent: z
    .string()
    .describe('The main content of the page for which SEO tags are generated.'),
  keywords: z
    .string()
    .optional()
    .describe('Optional keywords to focus the SEO tag generation.'),
});

export type GenerateSEOTagsInput = z.infer<typeof GenerateSEOTagsInputSchema>;

const GenerateSEOTagsOutputSchema = z.object({
  title: z
    .string()
    .describe('The SEO-friendly title for the page (max 60 characters).'),
  description: z
    .string()
    .describe('The SEO-friendly description for the page (max 160 characters).'),
});

export type GenerateSEOTagsOutput = z.infer<typeof GenerateSEOTagsOutputSchema>;

export async function generateSEOTags(
  input: GenerateSEOTagsInput
): Promise<GenerateSEOTagsOutput> {
  return generateSEOTagsFlow(input);
}

const generateSEOTagsPrompt = ai.definePrompt({
  name: 'generateSEOTagsPrompt',
  input: {schema: GenerateSEOTagsInputSchema},
  output: {schema: GenerateSEOTagsOutputSchema},
  prompt: `You are an SEO expert. Generate an SEO-friendly title and description for the following page content.

Page Content: {{{pageContent}}}

Title (max 60 characters):
Description (max 160 characters):

{{#if keywords}}
Focus on these keywords: {{{keywords}}}
{{/if}}`,
});

const generateSEOTagsFlow = ai.defineFlow(
  {
    name: 'generateSEOTagsFlow',
    inputSchema: GenerateSEOTagsInputSchema,
    outputSchema: GenerateSEOTagsOutputSchema,
  },
  async input => {
    const {output} = await generateSEOTagsPrompt(input);
    return output!;
  }
);
