class Student {
    readonly rollNumber: number;
    static collegeName: string = "Shri Vishnu Engineering College for Women";
    name: string;
    constructor(rollNumber: number, name: string) {
        this.rollNumber = rollNumber;
        this.name = name;
    }
    displayDetails(): void {
        console.log("Roll Number :", this.rollNumber);
        console.log("Student Name:", this.name);
        console.log("College Name:", Student.collegeName);
    }
}
let student1 = new Student(101, "Sanjana");
student1.displayDetails();



class Car {
    readonly carNumber: number;
    static company: string = "Hyundai";
    model: string;
    constructor(carNumber: number, model: string) {
        this.carNumber = carNumber;
        this.model = model;
    }
    showCar(): void {
        console.log("Car Number:", this.carNumber);
        console.log("Model:", this.model);
        console.log("Company:", Car.company);
    }
}
let car1 = new Car(
    1234,
    "Creta"
);
car1.showCar();



class Mobile {
    readonly serialNumber: number;
    static brand: string = "Samsung";
    model: string;
    constructor(serialNumber: number, model: string) {
        this.serialNumber = serialNumber;
        this.model = model;
    }
    showMobile(): void {
        console.log("Serial Number:", this.serialNumber);
        console.log("Model:", this.model);
        console.log("Brand:", Mobile.brand);
    }
}
let mobile1 = new Mobile(
    5678,
    "Galaxy A55"
);
mobile1.showMobile();