import React,{ useState }  from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import "./ExpenseItem.css";


function ExpenseItem(props) {
  const [title, setTitle] = useState(props.expense.title);

  const clickHandler = () => {
    setTitle('updated');
    console.log(title);
  }
 
    return (
      <Card className="expense-item">
        <ExpenseDate date={props.expense.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.expense.amount}</div>
          <button onClick={clickHandler}>change title</button>
        </div>
      </Card>
    );
}

export default ExpenseItem;