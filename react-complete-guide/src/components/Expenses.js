import Card from "./UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');
 
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const onFilterExpensesHandler = (filteredYear) =>{
    setFilteredYear(filteredYear);
   
  }
  let expenseContent = <p>No Expenses Found</p>
  if(filteredExpenses.length > 0){
    expenseContent = filteredExpenses.map((expense ) => {
      return  <ExpenseItem
       key={expense.id}
       title={expense.title}
       amount={expense.amount}
       date={expense.date}
     />
})
  }
    return (
      <Card className="card">
        <ExpensesFilter onFilterExpenses={onFilterExpensesHandler} filteredYear={filteredYear} />
        {expenseContent}
      </Card>
    );
  }
export default Expenses;