const account = {
    accountName: "username",
    balance: 1000,

    getBalance: function() {
        alert("Your current balance is: " + this.balance + "kr");
    },

    deposit: function() {
        let amount = parseFloat(prompt("Enter deposit amount"));
        if (isNan(amount)) {
            this.accountError ("You need to inser a number");
        }
        else {
            if (amount <= 0) {
                this.accountError ("Amount needs to be higher than 0");
            }
            else {
                this.balance += amount;
                alert (amount + "kr has been deposited")
            }
        }
    }

    
}

function atm() {
    const message = parseFloat (prompt("Choose an option: \n1. Check balance \n2. Deposit \n3. Withdraw \n4. Show account name \n5. Exit"));

    switch (message) {
        case 1:
            account.getBalance();
            atm();
            break;
        
        case 2:
            account.deposit();
            atm();
            break;

        case 3: // Withdraw function not made yet
        
        case 4:
            account.getAccountName();
            atm();
            break;

        case 5:
            alert("Thank you for using our ATM. Goodbye!");
            break;

        default:
            account.accountError("Invalid option. Choose a number between 1 and 5.");
            atm();
            break;
    }
}