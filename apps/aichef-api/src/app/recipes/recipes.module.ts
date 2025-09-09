/**
 * NestJS Imports
 */
import { Module } from '@nestjs/common';

/**
 * Internal Imports
 */
import { RecipesController } from './recipes.controller';

@Module({
  controllers: [RecipesController]
})
export class RecipesModule {
}