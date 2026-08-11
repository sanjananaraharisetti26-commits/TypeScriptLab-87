export function totalPrice(p1: number, p2: number, p3: number): number {
    return p1 + p2 + p3;
}

export function averagePrice(total: number, count: number): number {
    return total / count;
}

export function discountPercent(price: number, original: number): number {
    return (price / original) * 100;
}

export function getResult(percent: number): string {
    if (percent >= 90) {
        return "Excellent";
    } else if (percent >= 75) {
        return "Good";
    } else if (percent >= 60) {
        return "Average";
    } else {
        return "Low";
    }
}