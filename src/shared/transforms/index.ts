import { ApolloError } from 'apollo-server';
import parser from 'accept-language-parser';

import { Context, RequestHeaders, RequestQuery } from '../../config';


export default abstract class Transforms {
    constructor(ctx?: Context) {
      this._ctx = ctx ?? {
        request: { headers: { ['accept-language']: this.DEFAULT_LOCALE }, query: new RequestQuery() },
        dataSources: {} as Context['dataSources']
      };
  
      const acceptLanguage = this._ctx.request.headers['accept-language'] ?? this.DEFAULT_LOCALE;
  
      this._locale = parser.pick(this.SUPPORTED_LANGUAGES.split(','), acceptLanguage) ?? '';
    }


    private readonly SUPPORTED_LANGUAGES: string = process.env.SUPPORTED_LANGUAGES ?? 'en';

    private _locale: string; // request locale
    private _ctx: Context; // request context
  
    protected readonly DEFAULT_LOCALE: string = process.env.DEFAULT_LOCALE ?? 'en'; // default database locale
  
    protected get ctx() {
      return this._ctx;
    }
  
  
 
}
  