'use server';

import { answerFeeQuestions } from '@/ai/flows/answer-fee-questions';

export async function getAnswer(question: string): Promise<string> {
  // In a real app, you might add user context or announcement data here.
  try {
    const result = await answerFeeQuestions({ question });
    return result.answer;
  } catch (error) {
    console.error('Error getting answer from AI flow:', error);
    return "I'm sorry, but I encountered an error while trying to respond. Please try again.";
  }
}
