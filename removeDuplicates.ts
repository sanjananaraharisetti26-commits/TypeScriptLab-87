let text: string = "programming";
let result: string = "";
for (let i = 0; i < text.length; i++) {
    if (!result.includes(text.charAt(i))) {
        result = result + text.charAt(i);
    }
}
console.log("Original String:", text);
console.log("After Removing Duplicates:", result);