let value: any = "Jungkook";
console.log("String:", value);
value = 20;
console.log("Number:", value);
value = true;
console.log("Boolean:", value);
// unknown Type
let data: unknown = "BTS";
if (typeof data === "string") {
    console.log("String:", data);
}
// void Type
function showMessage(): void {
    console.log("BTS slayed Arirang Concert..!!");
}
showMessage();


let value1: any = "Hello";
console.log("Any Value:", value1);
//value1 can change bcz of any allows values all,also no type checking
value1 = 100;
console.log("Any Value:", value1);
//unknown needs type check bcz cant use directly
let value2: unknown = "TypeScript";
if (typeof value2 === "string") {
    console.log("Unknown Value:", value2.toUpperCase());
}
function message(): void {
    console.log("Learning TypeScript");
}
message();

let movie: any="People we met on a vacation";
console.log("Any value",movie);
movie="Voice Mail for Isabella";
console.log("Any value",movie);
let cinema: unknown ="Idea of you";
if(typeof movie==="string"){
    console.log("Unknown: ,movie");
}
function fact(): void{
    console.log("All three movies are superb..!!!");
}
fact();
