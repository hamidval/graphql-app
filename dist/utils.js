"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum = void 0;
class Enum {
    static isString(name) {
        return !name.match(this.REGEXP);
    }
    static getNames(en) {
        let result = new Array();
        for (let name in en) {
            if (this.isString(name))
                result.push(name);
        }
        return result;
    }
    static getValues(en) {
        let result = new Array();
        for (let name in en) {
            if (this.isString(name))
                result.push(en[name]);
        }
        return result;
    }
    static toResolver(en) {
        return this.getNames(en).reduce((acc, val, i) => {
            acc[val] = this.getValues(en)[i];
            return acc;
        }, {});
    }
}
exports.Enum = Enum;
Enum.REGEXP = /^-?[0-9]+$/g;
//# sourceMappingURL=utils.js.map