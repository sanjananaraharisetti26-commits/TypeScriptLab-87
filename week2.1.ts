function greet(name: string): string {
    return "Namaste " + name;
}
function getLocation(city: string = "Hyderabad"): string {
    return "Location: " + city;
}
function sendAlert(phoneNumber: number, message?: string): void {
    console.log("Sending SMS to:", phoneNumber);
   if (message) {
        console.log("Message:", message);
    }
}
function calculateTotalMarks(...marks: number[]): number {
    let total = 0;
    for (let mark of marks) {
        total = total + mark;
    }
    return total;
}
console.log(greet("Sanjana"));
console.log(getLocation());
console.log(getLocation("Vijayawada"));
sendAlert(9876543210);
sendAlert(9876543210, "Movie Starts Now!");
let total = calculateTotalMarks(10, 20, 30, 40);
console.log("Total Marks:", total);
