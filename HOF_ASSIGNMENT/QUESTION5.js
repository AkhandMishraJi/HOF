
let expenses = [

{ amount: 100, category: "Utilities" },
{ amount: 200, category: "Groceries" },
{ amount: 50, category: "Entertainment" }]
let totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0)
console.log("Total Expenses:", totalExpenses);