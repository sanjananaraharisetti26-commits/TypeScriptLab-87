class Student {
    public name: string;
    private age: number;
    protected course: string;
    constructor(name: string, age: number, course: string) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    displayDetails(): void {
        console.log("Student Name :", this.name);
        console.log("Age          :", this.age);
        console.log("Course       :", this.course);
    }
}
let student1 = new Student(
    "Sanjana",
    20,
    "Artificial Intelligence and Data Science"
);
console.log("Public Name:", student1.name);
student1.displayDetails();

class Car {
    public brand: string;
    private price: number;
    protected color: string;
    constructor(brand: string, price: number, color: string) {
        this.brand = brand;
        this.price = price;
        this.color = color;
    }
    showCar(): void {
        console.log("Brand:", this.brand);
        console.log("Price:", this.price);
        console.log("Color:", this.color);
    }
}
let car1 = new Car(
    "Hyundai",
    1200000,
    "White"
);
console.log("Car Brand:", car1.brand);
car1.showCar();


class Mobile {
    public company: string;
    private price: number;
    protected color: string;
    constructor(company: string, price: number, color: string) {
        this.company = company;
        this.price = price;
        this.color = color;
    }
    showMobile(): void {
        console.log("Company:", this.company);
        console.log("Price:", this.price);
        console.log("Color:", this.color);
    }
}
let mobile1 = new Mobile(
    "Samsung",
    25000,
    "Black"
);
console.log("Company:", mobile1.company);
mobile1.showMobile();