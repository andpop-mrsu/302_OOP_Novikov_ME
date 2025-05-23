export class Fraction {
    constructor(numer, denom) {
        if (denom === 0) {
            throw new Error('Знаменатель не может быть равен нулю');
        }
        const { n, d } = Fraction.normalize(numer, denom);
        this._numer = n;
        this._denom = d;
    }

    static gcd(a, b) {
        return b === 0 ? Math.abs(a) : Fraction.gcd(b, a % b);
    }

    static normalize(numer, denom) {
        const sign = Math.sign(numer) * Math.sign(denom) || 1;
        const g = Fraction.gcd(numer, denom);
        return { n: sign * Math.abs(numer / g), d: Math.abs(denom / g) };
    }

    get numer() {
        return this._numer;
    }

    get denom() {
        return this._denom;
    }

    add(other) {
        const newNumer = this._numer * other.denom + other.numer * this._denom;
        const newDenom = this._denom * other.denom;
        return new Fraction(newNumer, newDenom);
    }

    sub(other) {
        const newNumer = this._numer * other.denom - other.numer * this._denom;
        const newDenom = this._denom * other.denom;
        return new Fraction(newNumer, newDenom);
    }

    toString() {
        const n = this._numer;
        const d = this._denom;
        if (n === 0) return '0';
        const absN = Math.abs(n);
        const whole = Math.trunc(n / d);
        const rem = absN % d;
        if (absN >= d && rem !== 0) {
            return `${whole}'${rem}/${d}`;
        } else if (rem === 0) {
            return `${whole}`;
        } else {
            return `${n}/${d}`;
        }
    }
}
