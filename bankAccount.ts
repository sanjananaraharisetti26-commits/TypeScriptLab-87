class BankAccount {
    accountHolder: string;
    balance: number;
    constructor(accountHolder: string, balance: number) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    deposit(amount: number): void {
        this.balance = this.balance + amount;
        console.log("Amount Deposited:", amount);
    }
    withdraw(amount: number): void {
        this.balance = this.balance - amount;
        console.log("Amount Withdrawn:", amount);
    }
    displayBalance(): void {
        console.log("Account Holder:", this.accountHolder);
        console.log("Current Balance:", this.balance);
    }
}
let account = new BankAccount("Sanjana", 5000);
account.deposit(1000);
account.withdraw(500);
account.displayBalance();