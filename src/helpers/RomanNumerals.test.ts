import { RomanNumerals } from './RomanNumerals';

describe('RomanNumerals', () => {
  const tests: { [key: string]: number } = {
    'I': 1,
    'IV': 4,
    'IX': 9,
    'X': 10,
    'XI': 11,
    'CCLVI': 256,
    'MCLXXVIII': 1178,
    'MMCCCXXXVII': 2337,
  };

  describe('fromRoman', () => {
    it('should return correctly', () => {
      Object.entries(tests).map(([key, value]) => {
        expect(RomanNumerals.fromRoman(key)).toBe(value);
      });
    });
  });

  describe('toRoman', () => {
    it('should return correctly', () => {
      Object.entries(tests).map(([key, value]) => {
        expect(RomanNumerals.toRoman(value)).toBe(key);
      });
    });
  });
});


