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

