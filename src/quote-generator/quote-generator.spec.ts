import { QuoteGenerator } from './quote-generator';
import { Quote } from "../quote/quote";

describe('QuoteGenerator', () => {
  it('should be defined', () => {
    expect(new QuoteGenerator(new Quote())).toBeDefined();
  });

  it("should set lang", function() {
    const quoteGenerator = new QuoteGenerator(new Quote());
    expect(quoteGenerator.setLanguage('pt-pt')).toBe('pt-br')
    expect(quoteGenerator.setLanguage('en-US')).toBe('en')
  });

  it("should language not implemented", function() {
    const quoteGenerator = new QuoteGenerator(new Quote());
    expect(() => {
      quoteGenerator.setLanguage('ru')
    }).toThrowError(new Error('Language not implemented.'))
  });

  it("should get a wisdom quote", function() {
    const quote = new Quote();
    quote.setQuotes([
      'Nunca foi azar, sempre foi incompetência.'
    ])
    const quoteGenerator = new QuoteGenerator(quote);
    expect(quoteGenerator.getWisdomQuote()).toBe('Nunca foi azar, sempre foi incompetência.')
  });
});
