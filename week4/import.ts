import {
    totalPrice,
    averagePrice,
    discountPercent,
    getResult
} from "./exportfun.js";

const totalAmount = totalPrice(120, 180, 200);
const avgAmount = averagePrice(totalAmount, 3);
const percentValue = discountPercent(totalAmount, 600);

console.log("Total Amount:", totalAmount);
console.log("Average Amount:", avgAmount);
console.log("Percentage:", percentValue);
console.log("Result:", getResult(percentValue));
