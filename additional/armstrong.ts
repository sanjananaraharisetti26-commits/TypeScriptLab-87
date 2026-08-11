let number: number = 153;
let temp: number = number;
let sum: number = 0;

while (temp > 0) {

    let digit = temp % 10;

    sum = sum + (digit * digit * digit);

    temp = Math.floor(temp / 10);

}

if (sum == number) {
    console.log(number + " is an Armstrong Number");
}
else {
    console.log(number + " is Not an Armstrong Number");
}
