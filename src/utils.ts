export class Enum {
    private static REGEXP: RegExp = /^-?[0-9]+$/g;
  
    private static isString(name: string): boolean {
      return !name.match(this.REGEXP);
    }
  
    private static getNames(en: Record<string, string | number>): Array<string> {
      let result = new Array<string>();
  
      for (let name in en) {
        if (this.isString(name)) result.push(name);
      }
  
      return result;
    }
  
    private static getValues(en: Record<string, string | number>): Array<string | number> {
      let result = new Array<string | number>();
  
      for (let name in en) {
        if (this.isString(name)) result.push(en[name] as any);
      }
  
      return result;
    }
  
    public static toResolver(en: Record<string, string | number>): Record<string, string | number> {
      return this.getNames(en).reduce((acc: any, val: string, i: number) => {
        acc[val] = this.getValues(en)[i];
        return acc;
      }, {});
    }
  }


  export function whiteList(id:number | null = null): number[]
  {
    var whiteList = [1, 43, 41, 32, 56, 36]
    if(id != null){
      return whiteList.filter((x) => x == id)
    }else {
      return whiteList;
    }
  }

  export const  formatDate = (date:Date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day, month, year].join('-');
}