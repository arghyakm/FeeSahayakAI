'use server';

/**
 * @fileOverview An AI agent for answering student fee-related questions.
 *
 * - answerFeeQuestions - A function that handles answering fee-related questions.
 * - AnswerFeeQuestionsInput - The input type for the answerFeeQuestions function.
 * - AnswerFeeQuestionsOutput - The return type for the answerFeeQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerFeeQuestionsInputSchema = z.object({
  question: z.string().describe('The question about fees from the student.'),
});
export type AnswerFeeQuestionsInput = z.infer<typeof AnswerFeeQuestionsInputSchema>;

const AnswerFeeQuestionsOutputSchema = z.object({
  answer: z.string().describe('The answer to the student question.'),
});
export type AnswerFeeQuestionsOutput = z.infer<typeof AnswerFeeQuestionsOutputSchema>;

export async function answerFeeQuestions(input: AnswerFeeQuestionsInput): Promise<AnswerFeeQuestionsOutput> {
  return answerFeeQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerFeeQuestionsPrompt',
  input: {schema: AnswerFeeQuestionsInputSchema},
  output: {schema: AnswerFeeQuestionsOutputSchema},
  prompt: `You are FeeBuddy, a friendly Indian university fee assistant. Answer the question about fees to the best of your ability.

Question: {{{question}}}`,
});

const answerFeeQuestionsFlow = ai.defineFlow(
  {
    name: 'answerFeeQuestionsFlow',
    inputSchema: AnswerFeeQuestionsInputSchema,
    outputSchema: AnswerFeeQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
