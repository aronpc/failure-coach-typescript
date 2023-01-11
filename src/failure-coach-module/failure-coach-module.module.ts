import { Module } from '@nestjs/common';
import { QuoteGenerator } from "./quote-generator/quote-generator";
import { Quote } from "./quote/quote";
import { FailureController } from "./failure-controller/failure.controller";

@Module({
  controllers: [FailureController],
  providers: [{provide: QuoteGenerator, useValue: new QuoteGenerator(new Quote())}]
})
export class FailureCoachModuleModule {}
