/**
 * NestJS Imports
 */
import { Module } from '@nestjs/common';

/**
 * Internal Imports
 */
import { LlmService } from './llm.service';

@Module({
  providers: [LlmService],
  exports: [LlmService]
})
export class SharedModule {
}