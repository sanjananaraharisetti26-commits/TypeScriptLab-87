let number: number = 28;
let sum: number = 0;

for (let i = 1; i < number; i++) {

    if (number % i == 0) {
        sum = sum + i;
    }

}

if (sum == number) {
    console.log(number + " is a Perfect Number");
}
else {
    console.log(number + " is Not a Perfect Number");
}
