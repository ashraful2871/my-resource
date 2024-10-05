//  Add Money

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoneyAmount = getInputFieldValueById("add-money-amount");
    const mainBalance = getTextFieldValueById("main-balance");
    const pinNumber = getInputFieldValueById("pin-number");
    if (!isNaN(addMoneyAmount) && pinNumber === 12) {
      const newBalance = mainBalance + addMoneyAmount;
      document.getElementById("main-balance").innerText = newBalance;
      document.getElementById("add-money-amount").value = "";
      document.getElementById("pin-number").value = "";
    } else {
      alert("Failed to add money ");
      return;
    }
  });

//Transfer Money
document
  .getElementById("btn-transfer-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const mainBalance = getTextFieldValueById("main-balance");
    const transferMoneyAmount = getInputFieldValueById("transfer-money-amount");
    const transferMoneyPin = getInputFieldValueById(
      "transfer-money-pin-number"
    );
    if (!isNaN(transferMoneyAmount) && transferMoneyPin === 12) {
      const newBalance = mainBalance - transferMoneyAmount;
      document.getElementById("main-balance").innerText = newBalance;
      document.getElementById("transfer-money-amount").value = "";
      document.getElementById("transfer-money-pin-number").value = "";
    } else {
      alert("Failed to Transfer Money");
      return;
    }
  });

// Cash Out
document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutAmount = getInputFieldValueById("cash-out-amount");
    const mainBalance = getTextFieldValueById("main-balance");
    const cashOutPin = getInputFieldValueById("cash-out-pin-number");
    if (!isNaN(cashOutAmount) && cashOutPin === 12) {
      const newBalance = mainBalance - cashOutAmount;
      document.getElementById("main-balance").innerText = newBalance;
      document.getElementById("cash-out-amount").value = "";
      document.getElementById("cash-out-pin-number").value = "";
    } else {
      alert("Failed to cash out your money");
    }
  });
