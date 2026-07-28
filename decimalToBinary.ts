let number: number = 10;
let binary: string = "";

while (number > 0) {

    let remainder = number % 2;

    binary = remainder + binary;

    number = Math.floor(number / 2);

}

console.log("Binary Number:", binary);