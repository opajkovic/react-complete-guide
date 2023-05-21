import React from 'react';
import './Expense.css';
import ExpenseItem from './ExpenseItem';

const Expense = (props) => {
  return (
    <div className="expenses">
        <ExpenseItem expenses={props.expenses[0]} />
        <ExpenseItem expenses={props.expenses[1]} />
        <ExpenseItem expenses={props.expenses[2]} />
        <ExpenseItem expenses={props.expenses[3]} />
      </div>
  )
}

export default Expense;
