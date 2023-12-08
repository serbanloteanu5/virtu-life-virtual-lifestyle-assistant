/* File name: ComplexCode.js
   Description: This code is a simulation of a complex banking system that handles various operations like account creation, deposit, withdrawal, transfer, and balance inquiry.
   It uses advanced object-oriented programming concepts and follows best practices for code organization and design.
*/

// Class representing a Bank
class Bank {
  constructor() {
    this.customers = [];
    this.accounts = [];
  }

  // Method to create a new account for a customer
  createAccount(customer, accountType) {
    const account = new Account(customer, accountType);
    this.accounts.push(account);
    customer.accounts.push(account);
    return account;
  }

  // Method to get the balance of a specific account
  getBalance(accountId) {
    const account = this.accounts.find((account) => account.id === accountId);
    return account.balance;
  }

  // Method to perform a deposit into an account
  deposit(accountId, amount) {
    const account = this.accounts.find((account) => account.id === accountId);
    account.balance += amount;
  }

  // Method to perform a withdrawal from an account
  withdraw(accountId, amount) {
    const account = this.accounts.find((account) => account.id === accountId);
    if (account.balance >= amount) {
      account.balance -= amount;
    } else {
      throw new Error('Insufficient balance');
    }
  }

  // Method to perform a transfer between two accounts
  transfer(fromAccount, toAccount, amount) {
    this.withdraw(fromAccount.id, amount);
    this.deposit(toAccount.id, amount);
  }
}

// Class representing a Customer
class Customer {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.accounts = [];
  }
}

// Class representing an Account
class Account {
  static nextId = 1;

  constructor(customer, type) {
    this.id = Account.nextId++;
    this.customer = customer;
    this.type = type;
    this.balance = 0;
  }
}

// Demo usage of the complex banking system

// Create a new bank instance
const bank = new Bank();

// Create two customers
const customer1 = new Customer('John Doe', '123 Main Street');
const customer2 = new Customer('Jane Smith', '456 Park Avenue');

// Create different accounts for the customers
const account1 = bank.createAccount(customer1, 'Savings');
const account2 = bank.createAccount(customer1, 'Checking');
const account3 = bank.createAccount(customer2, 'Savings');

// Deposit money into accounts
bank.deposit(account1.id, 1000);
bank.deposit(account2.id, 500);
bank.deposit(account3.id, 2000);

// Perform a transfer between accounts
bank.transfer(account1, account2, 200);

// Perform a withdrawal
bank.withdraw(account3.id, 500);

// Get balances
const balance1 = bank.getBalance(account1.id);
const balance2 = bank.getBalance(account2.id);
const balance3 = bank.getBalance(account3.id);

console.log('Account1 balance:', balance1);
console.log('Account2 balance:', balance2);
console.log('Account3 balance:', balance3);
