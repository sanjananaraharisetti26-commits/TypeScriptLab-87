function showSize<T extends { length: number }>(data: T): void {
    console.log("Size:", data.length);
}

showSize("Hello");
showSize([5, 10, 15, 20, 25]);