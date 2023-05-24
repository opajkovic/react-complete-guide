import React, {useState} from 'react';
import './Expense.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021")

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
 return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpensesFilter selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
     <ExpensesList filteredExpenses={filteredExpenses}/>
      </div>
  )
}

export default Expense;
