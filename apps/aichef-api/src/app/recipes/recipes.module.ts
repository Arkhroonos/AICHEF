/**
 * NestJS Imports
 */
import { Module } from '@nestjs/common';

/**
 * Internal Imports
 */
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';
import { SharedModule } from '../shared/shared.module';

@Module({
  controllers: [RecipesController],
  providers: [RecipesService],
  imports: [SharedModule]
})
export class RecipesModule {
}