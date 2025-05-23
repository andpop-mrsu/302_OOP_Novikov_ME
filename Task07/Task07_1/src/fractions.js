export function createFraction(numer, denom) {
    function gcd(a, b) {
        return b === 0 ? Math.abs(a) : gcd(b, a % b);
    }

    function normalize(numer, denom) {
        const sign = Math.sign(numer) * Math.sign(denom);
        const g = gcd(numer, denom);
        return {
            numer: sign * Math.abs(numer / g),
            denom: Math.abs(denom / g)
        };
    }

    const { numer: n, denom: d } = normalize(numer, denom);

    return {
        getNumer() { return n; },
        getDenom() { return d; },
        add(frac) {
            const newNumer = n * frac.getDenom() + frac.getNumer() * d;
            const newDenom = d * frac.getDenom();
            return createFraction(newNumer, newDenom);
        },
        sub(frac) {
            const newNumer = n * frac.getDenom() - frac.getNumer() * d;
            const newDenom = d * frac.getDenom();
            return createFraction(newNumer, newDenom);
        },
        toString() {
            if (n === 0) {
                return '0';
            }
            const absNumer = Math.abs(n);
            const whole = Math.trunc(n / d);
            const remainder = absNumer % d;
            if (Math.abs(n) >= d && remainder !== 0) {
                return `${whole}'${remainder}/${d}`;
            } else if (Math.abs(n) >= d && remainder === 0) {
                return `${whole}`;
            } else {
                return `${n}/${d}`;
            }
            }
    };
}
