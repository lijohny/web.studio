'use server';

/**
 * @fileOverview This flow takes existing page content and suggests relevant keywords and phrases to enhance its SEO performance.
 *
 * - optimizeContent - A function that handles the content optimization process.
 * - OptimizeContentInput - The input type for the optimizeContent function.
 * - OptimizeContentOutput - The return type for the optimizeContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeContentInputSchema = z.object({
  content: z
    .string()
    .describe('The existing content of the page to be optimized.'),
});
export type OptimizeContentInput = z.infer<typeof OptimizeContentInputSchema>;

const OptimizeContentOutputSchema = z.object({
  keywords: z
    .string()
    .describe(
      'A list of keywords and phrases relevant to the content that can enhance SEO performance.'
    ),
});
export type OptimizeContentOutput = z.infer<typeof OptimizeContentOutputSchema>;

export async function optimizeContent(input: OptimizeContentInput): Promise<OptimizeContentOutput> {
  return optimizeContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeContentPrompt',
  input: {schema: OptimizeContentInputSchema},
  output: {schema: OptimizeContentOutputSchema},
  prompt: `You are an SEO expert. Review the content below and suggest relevant keywords and phrases to enhance its SEO performance.

Content: {{{content}}}

Provide a comma-separated list of keywords and phrases:
`,
});

const optimizeContentFlow = ai.defineFlow(
  {
    name: 'optimizeContentFlow',
    inputSchema: OptimizeContentInputSchema,
    outputSchema: OptimizeContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
