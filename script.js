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

            const depositNumber = getInput("depositAmount");

            spanTextUpdate("currentDeposit", depositNumber);
            spanTextUpdate("currentBalance", depositNumber);

            document.getElementById("depositAmount").value = "";
        })
// Withdraw button event handler 
        const withdrawBtn = document.getElementById("withdraw");
        withdrawBtn.addEventListener("click", function(){
            
            const withdrawNumber = getInput("withdrawAmount");

            spanTextUpdate("currentWithdraw", withdrawNumber);
            spanTextUpdate("currentBalance", -1*withdrawNumber);   

            document.getElementById("withdrawAmount").value = "";
        })

// function for get input
        function getInput (id){
            const amount = document.getElementById(id).value;
            const amountNumber = parseFloat(amount);
            return amountNumber
        }


// function for deposit
        function spanTextUpdate (id , depositNumber){
            const current = document.getElementById(id).innerText;
            const currentNumber = parseFloat(current);
            totalDeposit = depositNumber + currentNumber;
            document.getElementById(id).innerText = totalDeposit;
        }