export interface QuoteInterface {

  setQuotes(quotes: Array<string>);
  getQuote(index?: number, language?:string);
}
