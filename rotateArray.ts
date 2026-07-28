let numbers: number[] = [10, 20, 30, 40, 50];

let n: number = 2;

for (let i = 1; i <= n; i++) {

    let first = numbers[0]!;

    for (let j = 0; j < numbers.length - 1; j++) {
        numbers[j] = numbers[j + 1]!;
    }

    numbers[numbers.length - 1] = first;

}

console.log("Rotated Array:", numbers);