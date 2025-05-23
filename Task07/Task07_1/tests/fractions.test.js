import { createFraction }  from '../src/fractions.js';

describe('createFraction', () => {
    test('getNumer и getDenom должны возвратить сокращенные значения', () => {
        const frac = createFraction(6, -8);
        expect(frac.getNumer()).toBe(-3);
        expect(frac.getDenom()).toBe(4);
    });

    test('и вернуть верную сумму', () => {
        const a = createFraction(1, 2);
        const b = createFraction(1, 3);
        const result = a.add(b);
        expect(result.getNumer()).toBe(5);
        expect(result.getDenom()).toBe(6);
    });

    test('вычитание должно возвратить корректную разницу', () => {
        const a = createFraction(3, 4);
        const b = createFraction(1, 2);
        const result = a.sub(b);
        expect(result.getNumer()).toBe(1);
        expect(result.getDenom()).toBe(4);
    });

    test('toString должно перобразовывать', () => {
        expect(createFraction(-5, 2).toString()).toBe("-2'1/2");
        expect(createFraction(3, 4).toString()).toBe("3/4");
        expect(createFraction(4, 2).toString()).toBe("2");
        expect(createFraction(-3, 1).toString()).toBe("-3");
        expect(createFraction(-5, 2).toString()).toBe("-2'1/2");
        expect(createFraction(0, 1).toString()).toBe("0");
    });
});
