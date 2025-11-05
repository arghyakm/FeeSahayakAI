'use server';

/**
 * @fileOverview A flow that allows the chatbot to answer questions about announcements.
 *
 * - answerAnnouncements - A function that handles answering questions about announcements.
 * - AnswerAnnouncementsInput - The input type for the answerAnnouncements function.
 * - AnswerAnnouncementsOutput - The return type for the answerAnnouncements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerAnnouncementsInputSchema = z.object({
  query: z.string().describe('The question about announcements.'),
  announcements: z.string().describe('The current announcements.'),
});

export type AnswerAnnouncementsInput = z.infer<
  typeof AnswerAnnouncementsInputSchema
>;

const AnswerAnnouncementsOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about announcements.'),
});

export type AnswerAnnouncementsOutput = z.infer<
  typeof AnswerAnnouncementsOutputSchema
>;

export async function answerAnnouncements(
  input: AnswerAnnouncementsInput
): Promise<AnswerAnnouncementsOutput> {
  return answerAnnouncementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerAnnouncementsPrompt',
  input: {schema: AnswerAnnouncementsInputSchema},
  output: {schema: AnswerAnnouncementsOutputSchema},
  prompt: `You are FeeBuddy, a friendly Indian university fee assistant.  Answer the following question about announcements, using the announcements as context. If the question is not about announcements, say you can only answer questions about announcements. 

Question: {{{query}}}

Announcements: {{{announcements}}}`,
});

const answerAnnouncementsFlow = ai.defineFlow(
  {
    name: 'answerAnnouncementsFlow',
    inputSchema: AnswerAnnouncementsInputSchema,
    outputSchema: AnswerAnnouncementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
