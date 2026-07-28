let number: number = 145;
let temp: number = number;
let sum: number = 0;

while (temp > 0) {

    let digit = temp % 10;
    let fact = 1;

    for (let i = 1; i <= digit; i++) {
        fact = fact * i;
    }

    sum = sum + fact;

    temp = Math.floor(temp / 10);

}

if (sum == number) {
    console.log(number + " is a Strong Number");
}
else {
    console.log(number + " is Not a Strong Number");
}