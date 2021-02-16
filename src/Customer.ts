import { CustomerConfig } from "./customerConfig";

export class Customer {
  customerID: number;
  customerName: string;
  discount: number;

  constructor(customerInfo: CustomerConfig) {
    this.customerID = customerInfo.customerID;
    this.customerName = customerInfo.customerName;
    this.discount = customerInfo.customerDiscount;
  }

  getID(): number {
    return this.customerID;
  }
  getName(): string {
    return this.customerName;
  }
  getDiscount(): number {
    return this.discount;
  }
  setDiscount(discount: number): void {
    this.discount = discount;
  }
  toString(): string {
    return this.customerName;
  }
}
