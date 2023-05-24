import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
    return (
        <ul className='expenses-list'>
            {props.filteredExpenses.length === 0 && <h2 className='expenses-list__fallback'>No expenses found</h2>}
            {props.filteredExpenses.length > 0 && props.filteredExpenses.map((item) =>
                <ExpenseItem expense={item} key={item.id} />)}
        </ul>
    )
}

export default ExpensesList;
