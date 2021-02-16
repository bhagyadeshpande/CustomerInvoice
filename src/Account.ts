import { Customer } from "./Customer";
import { AccountConfig } from "./AccountConfig";
import { CustomerConfig } from "./customerConfig";

export class Account extends Customer {
  accID: number;
  accBalance: number = 0.0;

  constructor(customerInfo: CustomerConfig, accountDetails: AccountConfig) {
    super(customerInfo);
    this.accID = accountDetails.accountID;
    this.accBalance = accountDetails.accountBalance;
  }

  getAccountID(): number {
    return this.accID;
  }

  getAccountBalance(): number {
    return this.accBalance;
  }
  setAccountBalance(bal: number): void {
    this.accBalance = bal;
  }
  getCustomerName(): string {
    return this.customerName;
  }
  depositAmount(amt: number): number {
    this.accBalance = this.accBalance + amt;
    return this.accBalance;
  }
  withdrawAmount(amt: number): number {
    let accountBalance = this.getAccountBalance();
    if (accountBalance >= amt) {
      this.accBalance = accountBalance - amt;
      return this.accBalance;
    } else {
      alert("amount withdrawn exceeds the current balance!");
    }
  }
}
