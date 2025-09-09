/**
 * NestJS Imports
 */
import { Controller, Get } from '@nestjs/common';

@Controller('recipes')
export class RecipesController {

  @Get()
  getRecipes() {
    return 'Recipes';
  }
}