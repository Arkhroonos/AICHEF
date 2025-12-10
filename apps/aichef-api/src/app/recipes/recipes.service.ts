/**
 * NestJS Imports
 */
import { Injectable } from '@nestjs/common';

/**
 * Langchain Imports
 */
import { MessageContent } from '@langchain/core/messages';

/**
 * Internal Imports
 */
import { LlmService } from '../shared/llm.service';

@Injectable()
export class RecipesService {
  constructor(private readonly llmService: LlmService) {
  }

  async getRecipes(ingredients: string): Promise<{ recipes: MessageContent }> {
    return { recipes: await this.llmService.getRecipes(ingredients) };
  }
}