import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [expenseTitle, setExpenseTitle]= useState('');
  const [expenseAmount, setExpenseAmount]= useState('');
  const [expenseDate, setExpenseDate]= useState('');
  const onExpenseFormSubmit = (event)=>{
    event.preventDefault();
    const expenseData = {
      title: expenseTitle,
      amount :expenseAmount,
      date : new Date(expenseDate)
    }
   
    props.onSaveExpenseData(expenseData);
    setExpenseTitle('');
    setExpenseAmount('');
    setExpenseDate('');
  }
  const onExpenseTitleChange = (event) => {
    setExpenseTitle(event.target.value);
  };

  const onExpenseAmountChange = (event) => {
    setExpenseAmount(event.target.value);
  };

  const onExpenseDateChange = (event) => {
    setExpenseDate(event.target.value);
  };
  return (
    <form onSubmit={onExpenseFormSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={expenseTitle}  onChange={onExpenseTitleChange}  />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={onExpenseAmountChange}  value={expenseAmount}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31'   value={expenseDate} onChange={onExpenseDateChange} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;