import React from 'react';
import './Expense.css';
import ExpenseItem from './ExpenseItem';

const Expense = (props) => {
  console.log(props)
  return (
    <div className="expenses">
      {props.items.map((item) => 
        <ExpenseItem expense={item} key={Math.random()} /> )}
        {/* // <ExpenseItem expenses={props.expenses[0]} />
        // <ExpenseItem expenses={props.expenses[1]} />
        // <ExpenseItem expenses={props.expenses[2]} />
        // <ExpenseItem expenses={props.expenses[3]} /> */}
      </div>
  )
}

export default Expense;
