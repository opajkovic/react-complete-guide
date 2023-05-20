import ExpenseDate from './ExpenseDate';
import Card from './Card';
import "./ExpenseItem.css";


function ExpenseItem(props) {
 
    return (
      <Card className="expense-item">
        <ExpenseDate date={props.expenses.date} />
        <div className="expense-item__description">
          <h2>{props.expenses.title}</h2>
          <div className="expense-item__price">{props.expenses.amount}</div>
        </div>
      </Card>
    );
}

export default ExpenseItem;