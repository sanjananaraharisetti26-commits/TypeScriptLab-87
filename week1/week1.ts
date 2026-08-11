let studentName: string = "Taylor Swift";
let studentAge: number = 20;
let isPresent: boolean = true;
console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("Present:", isPresent);
//it helps to call and also use if-else to know attendance
function studentDetails(name: string, age: number, present: boolean): void {
    console.log("Student Name:", name);
    console.log("Student Age:", age);
    if (present) {
        console.log("Attendance: Present");
    } else {
        console.log("Attendance: Absent");
    }
}
studentDetails(studentName, studentAge, isPresent);


let Actor: string ="Mika Abdalla";
let Series: number=10;
let Skills: boolean=true;
console.log("Actress Name:"+Actor);
console.log("No.of.Series:"+Series);
console.log("Acting Skills:"+Skills);

//now 3 rd program where we use the data types
let webseries: string ="The Summer I Turned Pretty";
let Episodes: number=32;
let Hit: boolean=true;
console.log("My Favourite WebSeries:"+webseries);
console.log("Total Episodes:"+Episodes);
console.log("Hit or Flop:"+Hit);


