let numbers: number[] = [10, 25, 40, 15, 30];
let largest = numbers[0]!;
let secondLargest = numbers[0]!;
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i]! > largest) {
        secondLargest = largest;
        largest = numbers[i]!;
    }
    else if (numbers[i]! > secondLargest && numbers[i]! != largest) {
        secondLargest = numbers[i]!;
    }
}
console.log("Largest Number:", largest);
console.log("Second Largest Number:", secondLargest);
