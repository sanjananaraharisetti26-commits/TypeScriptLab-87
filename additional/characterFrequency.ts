let text: string = "hello";

for (let i = 0; i < text.length; i++) {

    let count = 1;

    if (text[i] == " ") {
        continue;
    }

    for (let j = i + 1; j < text.length; j++) {

        if (text[i] == text[j]) {
            count++;
        }

    }

    console.log(text[i] + " : " + count);

}
