/**
 * NestJS Imports
 */
import { Injectable } from '@nestjs/common';

/**
 * Langchain Imports
 */
import { ChatMistralAI } from '@langchain/mistralai';
import { ChatPromptTemplate } from '@langchain/core/prompts';

@Injectable()
export class LlmService {
  private readonly model = new ChatMistralAI({
    model: 'mistral-large-latest',
    temperature: 0
  });

  async getRecipes(ingredients: string) {
    const promptTemplate = ChatPromptTemplate.fromMessages([
      [
        'system',
        `You are a helpful assistant that provides recipes based on these provided ingredients.`
      ],
      [
        'user',
        '{ingredients}'
      ]
    ]);
    const promptValue = await promptTemplate.invoke({
      ingredients
    });

    const response = await this.model.invoke(promptValue);

    return response.content;
  }

}