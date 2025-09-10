/**
 * NestJS Imports
 */
import {
  Controller,
  Get,
  Query
} from '@nestjs/common';

/**
 * Internal Imports
 */
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {
  }

  @Get()
  getRecipes(@Query('ingredients') ingredients: string) {
    return this.recipesService.getRecipes(ingredients);
  }
}