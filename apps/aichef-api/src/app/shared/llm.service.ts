export interface Recipe {
  name: string;
  ingredients: string[];
  instructions: string[];
  servings: number;
  prep_time: number;
  cook_time: number;
  total_time: number;
  benefits: string[];
  variation?: boolean;
  notes?: string[];
  image?: string;
  video?: string;
}


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
        `You are a helpful assistant that provides several recipes based on these provided ingredients.
        You should provide the recipes in JSON format, don't mention it in the response.
        
        The JSON should have a "recipes" key then in the value you should provide an array of recipes.
        Don't put \n or \t in the JSON. create it as a real JSON.
        Each recipe should be a JSON object with the following keys:
        - "name": The name of the recipe
        - "ingredients": An array of ingredients used in the recipe
        - "instructions": An array of instructions to follow to make the recipe
        - "servings": The number of servings the recipe makes
        - "prep_time": The amount of time it takes to prepare the recipe
        - "cook_time": The amount of time it takes to cook the recipe
        - "total_time": The total amount of time it takes to prepare and cook the recipe
        - "benefits": An array of benefits of the recipe
        - "variation": if the recipe has a possible variation
        - "notes": Any notes or tips you want to provide about the recipe
        - "image": The URL of an image of the recipe
        - "video": The URL of a video of the recipe`
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

//Todo: Bloquer la possibilité d'écrire des phrases dans les inputs