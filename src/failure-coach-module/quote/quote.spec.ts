import { Quote } from './quote';
import { BadGatewayException } from "@nestjs/common";

describe('Quote', () => {
  it('should be defined', () => {
    expect(new Quote()).toBeDefined();
  });

  it("should set quotes array", function() {
    const quote = new Quote();
    quote.setQuotes([
      'Nunca foi azar, sempre foi incompetência.'
    ]);
    expect(quote.getQuote(0)).toBe('Nunca foi azar, sempre foi incompetência.')
  });

  it("should throw exception on out of index", function() {
    const quote = new Quote();
    expect(() => {
      quote.getQuote(0)
    }).toThrow(new Error('Quote out of index.'))
  });

});
