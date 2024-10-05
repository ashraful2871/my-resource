// transfer Money
document
  .getElementById("btn-transfer")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amountTransfer = parseFloat(
      document.getElementById("amount-transfer").value
    );
    const transferPin = document.getElementById("transfer-pin").value;
    const userAccountNumber = document.getElementById(
      "user-account-number"
    ).value;
    if (transferPin === "12" && userAccountNumber === "1234") {
      const accountBalance = parseFloat(
        document.getElementById("account-balance").innerText
      );
      const totalBalance = accountBalance - amountTransfer;

      document.getElementById("account-balance").innerText = totalBalance;
      document.getElementById("amount-transfer").value = "";
      document.getElementById("transfer-pin").value = "";
      document.getElementById("user-account-number").value = "";
      // } else if (userAccountNumber !== "1234") {
      //   alert("enter Your Valid Phone Number");
      // } else if (document.getElementById("amount-transfer").value === " ") {
      //   alert("enter your amount");
    } else alert("transfer failed please provide your valid Phone number or pin");
  });

// bill pay

document
  .getElementById("btn-bill-pay")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountBalance = parseFloat(
      document.getElementById("account-balance").innerText
    );
    const billPayAmount = parseFloat(
      document.getElementById("bill-pay-amount").value
    );
    const billPayPin = document.getElementById("bill-pay-pin").value;
    const billerAccountNumber = document.getElementById(
      "biller-account-number"
    ).value;
    if (billerAccountNumber === "1234" && billPayPin === "12") {
      const newBalance = accountBalance - billPayAmount;
      document.getElementById("account-balance").innerText = newBalance;

      document.getElementById("bill-pay-amount").value = "";
      document.getElementById("bill-pay-pin").value = "";
      document.getElementById("biller-account-number").value = "";
    }
  });

//switch to transfer money to pay bill and pay bill to transfer money

//show bill pay
document.getElementById("show-bill-pay").addEventListener("click", function () {
  document.getElementById("transfer-money-form").classList.add("hidden");
  document.getElementById("bill-pay-form").classList.remove("hidden");
});

// show transfer money
document
  .getElementById("show-transfer-money")
  .addEventListener("click", function () {
    document.getElementById("transfer-money-form").classList.remove("hidden");
    document.getElementById("bill-pay-form").classList.add("hidden");
  });
