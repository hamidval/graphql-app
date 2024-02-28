"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = exports.whiteList = exports.Enum = void 0;
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
function whiteList(id = null) {
    var whiteList = [1, 43, 41, 32, 56, 36];
    if (id != null) {
        return whiteList.filter((x) => x == id);
    }
    else {
        return whiteList;
    }
}
exports.whiteList = whiteList;
const formatDate = (date) => {
    var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    return [day, month, year].join('-');
};
exports.formatDate = formatDate;
//# sourceMappingURL=utils.js.map