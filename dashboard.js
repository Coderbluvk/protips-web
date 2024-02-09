// Update the populateTransactionHistory function in app.js

function populateTransactionHistory() {
  const transactionList = document.getElementById("transaction-list");

  // Replace 'transactions' with your actual collection name in Firebase
  database
    .collection("transactions")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const transactionData = doc.data();
        const transactionRow = document.createElement("tr");
        transactionRow.innerHTML = `
                    <td>${transactionData.date
                      .toDate()
                      .toLocaleDateString()}</td>
                    <td>${transactionData.amount}</td>
                    <td>${transactionData.coinName}</td>
                    <td>${transactionData.status}</td>
                `;
        transactionList.appendChild(transactionRow);
      });
    })
    .catch((error) => {
      console.error("Error fetching transactions: ", error);
    });
}

const buyButton = document.getElementById("buyButton");

buyButton.addEventListener("click", function () {
  window.location.href = "buy.html";
});

const sellButton = document.getElementById("sellButton");

sellButton.addEventListener("click", function () {
  window.location.href = "sell.html";
});
