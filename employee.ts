class Employee {
    public name: string;
    private salary: number;
    protected department: string;
    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    displayDetails(): void {
        console.log("Employee Name:", this.name);
        console.log("Employee Salary:", this.salary);
        console.log("Employee Department:", this.department);
    }
}
let emp = new Employee("Sanjana", 50000, "AI & DS");
console.log("Employee Name:", emp.name);
emp.displayDetails();