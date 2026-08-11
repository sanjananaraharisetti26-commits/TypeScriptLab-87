let numbers: number[] = [1, 2, 3, 5];

let n: number = 5;
let sum: number = 0;

for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]!;
}

let total: number = (n * (n + 1)) / 2;

let missing: number = total - sum;

console.log("Missing Number:", missing);
