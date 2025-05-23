import { Fraction } from '../src/fractions.js';

describe('Fraction constructor & prototype methods', () => {
    test('Сокращение(при создании)?', () => {
        const f = new Fraction(6, -8);
        expect(f.getNumer()).toBe(-3);
        expect(f.getDenom()).toBe(4);
    });

    test('Сложение?', () => {
        const a = new Fraction(1, 2);
        const b = new Fraction(1, 3);
        const res = a.add(b);
        expect(res.getNumer()).toBe(5);
        expect(res.getDenom()).toBe(6);
    });

    test('Вычитание?', () => {
        const a = new Fraction(3, 4);
        const b = new Fraction(1, 2);
        const res = a.sub(b);
        expect(res.getNumer()).toBe(1);
        expect(res.getDenom()).toBe(4);
    });

    test('toString работает?', () => {
        expect(new Fraction(-5, 2).toString()).toBe("-2'1/2");
        expect(new Fraction(3, 4).toString()).toBe('3/4');
        expect(new Fraction(4, 2).toString()).toBe('2');
        expect(new Fraction(0, 5).toString()).toBe('0');
    });
});