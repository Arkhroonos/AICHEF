/**
 * NestJS Imports
 */
import { Module } from '@nestjs/common';

/**
 * Internal Imports
 */
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { LlmService } from './shared/llm.service';

@Module({
  imports: [RecipesModule],
  controllers: [AppController],
  providers: [
    AppService,
    LlmService
  ]
})
export class AppModule {
}
