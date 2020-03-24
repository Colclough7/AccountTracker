
const month = new Date().getMonth() + 1
const year = new Date().getFullYear()
const day = new Date().getDate()



const account = {
  name: 'Eric Colclough',
  expenses: [],
  income: [],



  addExpense: function(d,a){
    
   this.expenses.push({description:d,amount:a, date:`${month}/${day}/${year}`})
  },


  getAccountSummary: function(){
  
    
    let totalExpenses = 0
    let totalIncome = 0
    this.income.forEach(function(income){
      totalIncome+= income.amount
    })
    this.expenses.forEach(function(expense){
      totalExpenses+= expense.amount
    })
    let accountTotal = totalIncome - totalExpenses
    return `${this.name} has a balance of $${(accountTotal).toFixed(2)} with $${totalExpenses.toFixed(2)} in expenses and $${totalIncome.toFixed(2)} in income`
  },


  addIcome:function(d,a){
    this.income.push({description:d,amount:a, date:`${month}/${day}/${year}`})
  }
}

let spaceFunction = function(){
  console.log('////////////////////////////////////////////////////////')
}
account.addExpense('coffee',5.78)
account.addExpense('milk',6.56)
account.addExpense('pizza',20.12)
account.addExpense('toliet papaer',3.56)
account.addExpense('soda',1.99)
account.addExpense('NSB',374.99)
account.addExpense('Venmo',680)
account.addExpense('car note',750)
account.addExpense('insurance',150)
account.addIcome('payroll',230.44)
account.addIcome('payroll',455.44)
account.addIcome('payroll',684.44)
account.addIcome('payroll',2934.44)
account.addIcome('payroll',432.44)
account.addIcome('payroll',3849.44)
console.log(account.expenses)
console.log(spaceFunction())
console.log(account.income)
console.log(spaceFunction())
console.log(account.getAccountSummary())