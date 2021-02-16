import { CustomerConfig } from "./customerConfig";
import { Invoice } from "./Invoice";
import { Account } from "./Account";
import { InvoiceConfig } from "./InvoiceConfig";
import { AccountConfig } from "./AccountConfig";
import { Customer } from "./Customer";

document.getElementById("button").addEventListener("click", () => {
  let customerID = parseInt(
    (<HTMLInputElement>document.getElementById("cid")).value
  );
  let customerName = (<HTMLInputElement>document.getElementById("cname")).value;
  let customerDiscount = parseInt(
    (<HTMLInputElement>document.getElementById("cdisc")).value
  );

  let invoiceID = parseInt(
    (<HTMLInputElement>document.getElementById("iid")).value
  );
  let invoiceAmount = parseInt(
    (<HTMLInputElement>document.getElementById("amt")).value
  );

  let accountID = parseInt(
    (<HTMLInputElement>document.getElementById("aid")).value
  );
  let accountBalance = parseInt(
    (<HTMLInputElement>document.getElementById("bal")).value
  );

  let customerDetails: CustomerConfig = {
    customerID,
    customerName,
    customerDiscount,
  };

  let invoiceDetails: InvoiceConfig = {
    invoiceID,
    invoiceAmount,
  };
  let accDetails: AccountConfig = {
    accountID,
    accountBalance,
  };

  let invoiceObj = new Invoice(customerDetails, invoiceDetails);
  let depositAmt = invoiceObj.getAmount();
  let accountObj = new Account(customerDetails, accDetails);

  document.getElementById(
    "output1"
  ).innerHTML = `Customer ID: ${invoiceObj.getID()} , 
  customer name : ${invoiceObj.getName()}, discount : ${invoiceObj.getDiscount()}% `;
  document.getElementById(
    "output2"
  ).innerHTML = `Invoice ID: ${invoiceObj.getInvoiceID()} , 
  Invoice Amount : ${invoiceObj.getAmount()},
  Total amount after discount : ${invoiceObj.getAmountAfterDiscount()}`;
  document.getElementById(
    "output3"
  ).innerHTML = `Account ID: ${accountObj.getAccountID()} , 
  Balance : ${accountObj.getAccountBalance()}`;
});

document.getElementById("depositID").addEventListener("click", () => {
  let amount = prompt("Please enter the amount to be deosited");
  let customerID = parseInt(
    (<HTMLInputElement>document.getElementById("cid")).value
  );
  let customerName = (<HTMLInputElement>document.getElementById("cname")).value;
  let customerDiscount = parseInt(
    (<HTMLInputElement>document.getElementById("cdisc")).value
  );
  let accountID = parseInt(
    (<HTMLInputElement>document.getElementById("aid")).value
  );
  let accountBalance = parseInt(
    (<HTMLInputElement>document.getElementById("bal")).value
  );
  let customerDetails: CustomerConfig = {
    customerID,
    customerName,
    customerDiscount,
  };
  let accDetails: AccountConfig = {
    accountID,
    accountBalance,
  };
  let newAccountObj = new Account(customerDetails, accDetails);
  let newBalance = newAccountObj.depositAmount(parseInt(amount));
  newAccountObj.setAccountBalance(newBalance);
  document.getElementById("output4").innerHTML =
    "Account balance after depositing " +
    amount +
    " is " +
    newAccountObj.getAccountBalance();
});

document.getElementById("withdrawID").addEventListener("click", () => {
  let amount = prompt("Please enter the amount to be withdrawn");
  let customerID = parseInt(
    (<HTMLInputElement>document.getElementById("cid")).value
  );
  let customerName = (<HTMLInputElement>document.getElementById("cname")).value;
  let customerDiscount = parseInt(
    (<HTMLInputElement>document.getElementById("cdisc")).value
  );
  let accountID = parseInt(
    (<HTMLInputElement>document.getElementById("aid")).value
  );
  let accountBalance = parseInt(
    (<HTMLInputElement>document.getElementById("bal")).value
  );
  let customerDetails: CustomerConfig = {
    customerID,
    customerName,
    customerDiscount,
  };
  let accDetails: AccountConfig = {
    accountID,
    accountBalance,
  };
  let anotherAccountObj = new Account(customerDetails, accDetails);
  let bal = anotherAccountObj.withdrawAmount(parseInt(amount));
  anotherAccountObj.setAccountBalance(bal);
  document.getElementById("output5").innerHTML =
    "Account balance after withdrawing " +
    amount +
    " is " +
    anotherAccountObj.getAccountBalance();
});
