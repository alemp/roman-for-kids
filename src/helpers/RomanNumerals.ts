export class RomanNumerals {
  static romanMap: { [key: string]: number } = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1,
  };

  static toRoman(number: number): string {
    if (!number.toString().match(/\d/)) {
      throw new Error('the number is invalid');
    }

    let result = '';
    for (const key in this.romanMap) {
      result += key.repeat(Math.floor(number / this.romanMap[key]));
      number %= this.romanMap[key];
    }

    return result;
  }

  static fromRoman(numeral: string): number {
    if (!numeral.match(/^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/)) {
      throw new Error('the literal is invalid');
    }

    const literals = numeral.split('');

    return literals.reduce((accumulator: number, literal: string, index: number) => {
      if (index > 0 && this.romanMap[literals[index - 1]] < this.romanMap[literal]) {
        return accumulator + (this.romanMap[literal] - (this.romanMap[literals[index - 1]] * 2));
      }
      return accumulator + this.romanMap[literal];
    }, 0);
  }
}
