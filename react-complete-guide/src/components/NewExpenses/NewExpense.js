import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler =(expenseInputData)=>{
    const expenseData ={
     ...expenseInputData,
     id : Math.random()
   }
   props.addExpenses(expenseData);
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;