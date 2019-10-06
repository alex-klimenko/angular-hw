// tslint:disable-next-line:import-name
import Converter from './converter';
// tslint:disable-next-line:import-name
import IConverter from './converters-interface';

export default class HexOctal extends Converter implements IConverter {
  constructor() {
    super();
  }

  public convertTo(num: number): string {
    if (num === 0 || !num) {
      console.log('Enter a number greater than zero');
      return;
    }

    const hexString = this.getStringFromNumber(num, 16).map(el => {

      // tslint:disable-next-line:no-parameter-reassignment
      return el = el < 10
        ?
        el
        :
        String.fromCharCode(el + 55);

    });

    return hexString.join('');
  }

  public convertFrom(str: string): number {
    const getArrWithoutLitters: string[] = str.split('').reverse().map(el => {

      return el = el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 70
        ?
        `${el.charCodeAt(0) - 55}`
        :
        el;

    });

    return this.getNumberFromString(getArrWithoutLitters, 16);
  }
}
