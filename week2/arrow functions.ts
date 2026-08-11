function greet(name: string): string {
    return "Hello " + name;
}
const welcome = (name: string): string => {
    return "Welcome " + name;
};
const add = (a: number, b: number): number => {
    return a + b;
};
const showMessage = (): void => {
    console.log("Learning TypeScript");
};
// ---------- Function Calls ----------
console.log(greet("Sanjana"));
console.log(welcome("Sanjana"));
console.log("Sum:", add(10, 20));
showMessage();


// 1. Normal Function
function sayGoodMorning(name: string): string {
    return "Good Morning " + name;
}
// 2. Arrow Function
const sayGoodEvening = (name: string): string => {
    return "Good Evening " + name;
};
// 3. Arrow Function with Two Numbers
const multiply = (a: number, b: number): number => {
    return a * b;
};
// 4. Arrow Function without Parameters
const showCollege = (): void => {
    console.log("SVECW");
};
console.log(sayGoodMorning("Sanjana"));
console.log(sayGoodEvening("Sanjana"));
console.log("Product:", multiply(5, 4));
showCollege();
// 1. Normal Function
function showCity(city: string): string {
    return "City: " + city;
}
// 2. Arrow Function
const showCountry = (country: string): string => {
    return "Country: " + country;
};
// 3. Arrow Function with Two Numbers
const subtract = (a: number, b: number): number => {
    return a - b;
};

// 4. Arrow Function without Parameters
const showCourse = (): void => {
    console.log("Artificial Intelligence and Data Science");
};

// ---------- Function Calls ----------
console.log(showCity("Hyderabad"));

console.log(showCountry("India"));

console.log("Difference:", subtract(30, 10));

showCourse();
