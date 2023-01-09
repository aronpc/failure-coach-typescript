import { QuoteInterface } from "../quote-interface/quote-interface.interface";
import { fsReadFile } from "ts-loader/dist/utils";

export class QuoteGenerator {

  constructor(private quote: QuoteInterface) {
  }

  setLanguage(language?:string) {
    switch (language.substring(0,2)) {
      case 'pt': return 'pt-br';
      case 'en': return 'en';
      default: throw new Error('Language not implemented.');
    }
  }

  async loadQuotes() {
    const quotes = fsReadFile('src/i18n/pt-br.json', 'utf8');
    return JSON.parse(quotes);
  }

  getWisdomQuote(index?:number, language?:string) {
    this.loadQuotes().then((f) => {
      this.quote.setQuotes(f.quotes);
    });
    language = this.setLanguage(language ?? 'pt');
    return this.quote.getQuote(index, language);
  }
}
