import { QuoteInterface } from "../quote-interface/quote-interface.interface";
import { BadGatewayException } from "@nestjs/common";
import { isUndefined } from "@nestjs/common/utils/shared.utils";

export class Quote implements QuoteInterface{
  private quotes: Array<string> = [];

  setQuotes(quotes: Array<string>) {
    this.quotes = quotes
  }

  getQuote(index?: number) {
    if (index > (this.quotes.length - 1)) {
      throw new Error('Quote out of index.')
    }
    if (isUndefined(index)) {
      index = Math.floor(Math.random() * this.quotes.length);
    }
    return this.quotes[index];
  }

}
