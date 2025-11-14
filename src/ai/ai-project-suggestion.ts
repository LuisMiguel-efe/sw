'use server';

/**
 * @fileOverview AI-powered project suggestion flow.
 *
 * This file defines a Genkit flow that suggests relevant projects or skills to explore based on user input related to cloud technologies.
 *
 * @exported Functions:
 *   - `getSuggestedProjectsOrSkills` - The main function to retrieve project or skill suggestions.
 * @exported Types:
 *   - `ProjectSuggestionInput` - Input type for the suggestion flow.
 *   - `ProjectSuggestionOutput` - Output type for the suggestion flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectSuggestionInputSchema = z.object({
  keywords: z
    .string()
    .describe(
      'Keywords related to cloud technologies (e.g., AWS Lambda, serverless, containers).'
    ),
});
export type ProjectSuggestionInput = z.infer<typeof ProjectSuggestionInputSchema>;

const ProjectSuggestionOutputSchema = z.object({
  suggestions: z
    .string()
    .describe('A list of project suggestions or relevant skills to explore.'),
});
export type ProjectSuggestionOutput = z.infer<typeof ProjectSuggestionOutputSchema>;

export async function getSuggestedProjectsOrSkills(
  input: ProjectSuggestionInput
): Promise<ProjectSuggestionOutput> {
  return projectSuggestionFlow(input);
}

const projectSuggestionPrompt = ai.definePrompt({
  name: 'projectSuggestionPrompt',
  input: {schema: ProjectSuggestionInputSchema},
  output: {schema: ProjectSuggestionOutputSchema},
  prompt: `You are an expert in cloud computing and related technologies.

A user is interested in exploring project ideas or skills related to the keywords they provide.

Based on the following keywords:

{{keywords}}

Suggest a few relevant project ideas or skills to explore. Be concise and specific.
`,
});

const projectSuggestionFlow = ai.defineFlow(
  {
    name: 'projectSuggestionFlow',
    inputSchema: ProjectSuggestionInputSchema,
    outputSchema: ProjectSuggestionOutputSchema,
  },
  async input => {
    const {output} = await projectSuggestionPrompt(input);
    return output!;
  }
);
