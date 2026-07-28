class Student {
    // Variables
    name: string;
    age: number;
    course: string;
    college: string;
    // Constructor
    constructor(name: string, age: number, course: string, college: string) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.college = college;
    }
    // Method
    displayDetails(): void {
        console.log("Student Name :", this.name);
        console.log("Age          :", this.age);
        console.log("Course       :", this.course);
        console.log("College      :", this.college);
    }
}
// Object Creation
let student1 = new Student(
    "Sanjana",
    20,
    "Artificial Intelligence and Data Science",
    "Shri Vishnu Engineering College for Women"
);
// Calling Method
student1.displayDetails();

class Employee {

    id: number;
    name: string;
    department: string;

    constructor(id: number, name: string, department: string) {
        this.id = id;
        this.name = name;
        this.department = department;
    }

    displayDetails(): void {
        console.log("Employee ID:", this.id);
        console.log("Employee Name:", this.name);
        console.log("Department:", this.department);
    }
}

let employee1 = new Employee(
    101,
    "Rahul",
    "HR"
);

employee1.displayDetails();


class Book {
    title: string;
    author: string;
    price: number;
    constructor(title: string, author: string, price: number) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
    displayDetails(): void {
        console.log("Book Title:", this.title);
        console.log("Author:", this.author);
        console.log("Price:", this.price);
    }
}
let book1 = new Book(
    "Python Basics",
    "Ravi",
    500
);
book1.displayDetails();