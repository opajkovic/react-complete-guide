import React, {useState} from 'react';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
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
      <ExpensesChart expenses={filteredExpenses} />
     <ExpensesList filteredExpenses={filteredExpenses}/>
      </div>
  )
}

export default Expense;
