function showData<T>(data: T): void {
    console.log("Data:", data);
}

showData<number>(250);
showData<string>("Hello");
showData<boolean>(false);