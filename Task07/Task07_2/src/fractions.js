export function Fraction(numer, denom) {
    if (denom === 0) {
        throw new Error('Denominator cannot be zero');
    }
    const { n, d } = Fraction._normalize(numer, denom);
    this._numer = n;
    this._denom = d;
}

Fraction._gcd = function(a, b) {
    return b === 0 ? Math.abs(a) : Fraction._gcd(b, a % b);
};

Fraction._normalize = function(numer, denom) {
    const sign = Math.sign(numer) * Math.sign(denom) || 1;
    const g = Fraction._gcd(numer, denom);
    return { n: sign * Math.abs(numer / g), d: Math.abs(denom / g) };
};

Fraction.prototype.getNumer = function() {
    return this._numer;
};

Fraction.prototype.getDenom = function() {
    return this._denom;
};

Fraction.prototype.add = function(other) {
    const newNumer = this._numer * other.getDenom() + other.getNumer() * this._denom;
    const newDenom = this._denom * other.getDenom();
    return new Fraction(newNumer, newDenom);
};

Fraction.prototype.sub = function(other) {
    const newNumer = this._numer * other.getDenom() - other.getNumer() * this._denom;
    const newDenom = this._denom * other.getDenom();
    return new Fraction(newNumer, newDenom);
};

Fraction.prototype.toString = function() {
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
};