/*
    Objective: 
        Create an expense tracker that allows users to input their expenses and income, and displays a summary. 
    
    Tasks:
        Function addTransaction: Adds an expense or income transaction.
        Function calculateTotal: Calculates the total balance based on transactions.
        Function displaySummary: Displays a summary of expenses, income, and balance.
        Attach addTransaction to the submit button for transactions.
        Attach calculateTotal to update the balance after every transaction.
 */

function ExpenseTracker() {
    this.trans = [];
}

ExpenseTracker.prototype.addTransaction = function(amt, cat) {
    var tran = {
        amt: parseFloat(amt),
        cat: cat,
        type: amt > 0 ? "income" : "expense"
    };
    this.trans.push(tran);
    this.calculateTotal();
};

ExpenseTracker.prototype.calculateTotal = function() {
    var income = 0;
    var expenses = 0;

    for (var i = 0; i < this.trans.length; i++) {
        var curTran = this.trans[i];
        if (curTran.type === "income") {
            income += curTran.amount;
        } else if (curTran.type === "expense") {
            expenses += Math.abs(curTran.amount);
        }
    }

    var balance = income - expenses;
    this.displaySummary(income, expenses, balance);
};


ExpenseTracker.prototype.displaySummary = function(income, expenses, balance) {
    console.log("income: " + income);
    console.log("exprense: " + expenses);
    console.log("balance "+ balance);
};

var tracker = new ExpenseTracker();

// Give the id of the submit button in "yourSubmitId"
document.getElementById("yourSubmitId").addEventListener("submit", function(event) {
    event.preventDefault();
    var amount = document.getElementById("youramountId").value;
    var category = document.getElementById("yourcategoryId").value;
    tracker.addTransaction(amount, category);
    event.target.reset();
});