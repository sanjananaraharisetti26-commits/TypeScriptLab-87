let number: number = 1234;
let temp: number = number;
let sum: number = 0;
while (temp > 0) {
    let digit = temp % 10;
    sum = sum + digit;
    temp = Math.floor(temp / 10);
}
console.log("Sum of Digits:", sum);