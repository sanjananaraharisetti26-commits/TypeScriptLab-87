let studentName: string = "Sanjana";
let age: number = 20;
let isPresent: boolean = true;
console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Present:", isPresent);


let mobileName: string = "Samsung";
let price: number = 25000;
let inStock: boolean = true;
console.log("Mobile Name:", mobileName);
console.log("Price:", price);
console.log("In Stock:", inStock);


let movieName: string = "Off Campus";
let releaseYear: number = 2026;
let isHit: boolean = true;
let leadActors: string[] = [
    "Belmont Cameli",
    "Ella Bright",
    "Stephen Kalyn",
    "Mika Abdalla"
];
console.log("Movie Name:", movieName);
console.log("Release Year:", releaseYear);
console.log("Hit Movie:", isHit);
console.log("Lead Actors:");
for (let i = 0; i < leadActors.length; i++) {
    console.log(leadActors[i]);
}

