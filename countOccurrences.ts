let numbers: number[] = [1, 2, 2, 3, 1];
for (let i = 0; i < numbers.length; i++) {
    let count = 0;
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[i]! == numbers[j]!) {
            count++;
        }
    }
    let printed = false;
    for (let k = 0; k < i; k++) {
        if (numbers[i]! == numbers[k]!) {
            printed = true;
        }
    }
    if (!printed) {
        console.log(numbers[i] + " : " + count);
    }
}