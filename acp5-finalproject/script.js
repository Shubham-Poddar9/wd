let balance = 0;
let transactions = [];

const balanceElement = document.getElementById("balance");
const transactionsList = document.getElementById("transactions");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");

document.getElementById("add-income").addEventListener("click", () => {
  addTransaction("income");
});

document.getElementById("add-expense").addEventListener("click", () => {
  addTransaction("expense");
});

function addTransaction(type) {
  const description = descriptionInput.value;
  const amount = parseFloat(amountInput.value);

  if (!description || isNaN(amount) || amount <= 0) {
    alert("Please provide valid inputs.");
    return;
  }

  const transaction = { type, description, amount };
  transactions.push(transaction);

  updateBalance(transaction);
  updateTransactionHistory();
  clearInputs();
}

function updateBalance(transaction) {
  if (transaction.type === "income") {
    balance += transaction.amount;
  } else {
    balance -= transaction.amount;
  }
  balanceElement.textContent = `$${balance.toFixed(2)}`;
}

function updateTransactionHistory() {
  transactionsList.innerHTML = "";
  transactions.forEach((transaction) => {
    const listItem = document.createElement("li");
    listItem.classList.add(transaction.type);
    listItem.textContent = `${transaction.description}: $${transaction.amount.toFixed(2)}`;
    transactionsList.appendChild(listItem);
  });
}

function clearInputs() {
  descriptionInput.value = "";
  amountInput.value = "";
}