import React,{ useState }  from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import "./ExpenseItem.css";


function ExpenseItem(props) {
  const [title, setTitle] = useState(props.expenses.title);

  const clickHandler = () => {
    setTitle('updated');
    console.log(title);
  }
 
    return (
      <Card className="expense-item">
        <ExpenseDate date={props.expenses.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.expenses.amount}</div>
          <button onClick={clickHandler}>change</button>
        </div>
      </Card>
    );
}

export default ExpenseItem;