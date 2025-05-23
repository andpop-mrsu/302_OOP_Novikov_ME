import { Fraction } from '../src/fraction.js';

describe('Fraction class with getters', () => {
    test('Конструктор с сокращением', () => {
        const f = new Fraction(6, -8);
        expect(f.numer).toBe(-3);
        expect(f.denom).toBe(4);
    });

    test('Суммирование', () => {
        const a = new Fraction(1, 2);
        const b = new Fraction(1, 3);
        const result = a.add(b);
        expect(result.numer).toBe(5);
        expect(result.denom).toBe(6);
    });

    test('Вычитание', () => {
        const a = new Fraction(3, 4);
        const b = new Fraction(1, 2);
        const result = a.sub(b);
        expect(result.numer).toBe(1);
        expect(result.denom).toBe(4);
    });

    test('toString', () => {
        expect(new Fraction(-5, 2).toString()).toBe("-2'1/2");
        expect(new Fraction(3, 4).toString()).toBe('3/4');
        expect(new Fraction(4, 2).toString()).toBe('2');
        expect(new Fraction(0, 5).toString()).toBe('0');
    });

    test('Если числитель ноль', () => {
        expect(() => new Fraction(1, 0)).toThrow('Знаменатель не может быть равен нулю');
    });
});