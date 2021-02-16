import { InvoiceConfig } from "./InvoiceConfig";
import { Customer } from "./Customer";
import { CustomerConfig } from "./customerConfig";

export class Invoice extends Customer {
  ID: number;
  amount: number;

  constructor(customerInfo: CustomerConfig, invoiceDetails: InvoiceConfig) {
    super(customerInfo);
    this.ID = invoiceDetails.invoiceID;
    this.amount = invoiceDetails.invoiceAmount;
  }

  getInvoiceID(): number {
    return this.ID;
  }
  getAmount(): string {
    return this.amount.toString();
  }
  setAmount(amt: number): void {
    this.amount = amt;
  }
  getCustomerName(): string {
    return this.customerName;
  }
  getAmountAfterDiscount(): number {
    let initialAmount = this.amount;
    let discountPercent = this.discount;
    let discount = (initialAmount * discountPercent) / 100;
    let discountAmount = initialAmount - discount;
    return discountAmount;
  }
}
