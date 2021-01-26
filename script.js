// login button event handler

const loginBtn = document.getElementById("login-btn");
        loginBtn.addEventListener("click", function(){
          const loginForm = document.getElementById("login-form");
          loginForm.style.display = "none";
          const debitArea = document.getElementById("debit-area");
          debitArea.style.display = "block"; 
        })

// Deposit button event handler
const depositBtn = document.getElementById("deposit");
        depositBtn.addEventListener("click", function(){
            const depositAmount = document.getElementById("depositAmount").value;
            const depositNumber = parseFloat(depositAmount);
            const currentDeposit = document.getElementById("currentDeposit").innerText;
            const currentDepositNumber = parseFloat(currentDeposit);
            totalDeposit = depositNumber + currentDepositNumber;
            document.getElementById("currentDeposit").innerText = totalDeposit;
            document.getElementById("depositAmount").value = "";
        })