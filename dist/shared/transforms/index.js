"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const accept_language_parser_1 = __importDefault(require("accept-language-parser"));
const config_1 = require("../../config");
class Transforms {
    constructor(ctx) {
        var _a, _b, _c, _d;
        this.SUPPORTED_LANGUAGES = (_a = process.env.SUPPORTED_LANGUAGES) !== null && _a !== void 0 ? _a : 'en';
        this.DEFAULT_LOCALE = (_b = process.env.DEFAULT_LOCALE) !== null && _b !== void 0 ? _b : 'en'; // default database locale
        this._ctx = ctx !== null && ctx !== void 0 ? ctx : {
            request: { headers: { ['accept-language']: this.DEFAULT_LOCALE }, query: new config_1.RequestQuery() },
            dataSources: {}
        };
        const acceptLanguage = (_c = this._ctx.request.headers['accept-language']) !== null && _c !== void 0 ? _c : this.DEFAULT_LOCALE;
        this._locale = (_d = accept_language_parser_1.default.pick(this.SUPPORTED_LANGUAGES.split(','), acceptLanguage)) !== null && _d !== void 0 ? _d : '';
    }
    get ctx() {
        return this._ctx;
    }
}
exports.default = Transforms;
//# sourceMappingURL=index.js.map