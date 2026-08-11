let start: number = 1;
let end: number = 20;

console.log("Prime Numbers are:");

for (let number = start; number <= end; number++) {

    let isPrime: boolean = true;

    if (number <= 1) {
        isPrime = false;
    }

    for (let i = 2; i < number; i++) {

        if (number % i == 0) {
            isPrime = false;
            break;
        }

    }

    if (isPrime) {
        console.log(number);
    }

}
