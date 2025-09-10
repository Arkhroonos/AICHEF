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

  getRecipes(ingredients: string): Promise<MessageContent> {
    return this.llmService.getRecipes(ingredients);
  }
}