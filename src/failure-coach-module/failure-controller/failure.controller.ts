import { Controller, Get, Param, Redirect, Req } from "@nestjs/common";
import { QuoteGenerator } from "../quote-generator/quote-generator";
import { Request } from "express";

@Controller('failure')
export class FailureController {

  constructor(private quote: QuoteGenerator) {
  }

  @Get()
  get(@Req() req: Request) {
    const lang = req.query.lang?.toString() ?? 'pt';
    return `<h1>${this.quote.loadQuotes(lang).getWisdomQuote()}</h1>`;
  }
}
