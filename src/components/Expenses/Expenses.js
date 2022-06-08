import './Expenses.css';
import ExpensesItem from  './ExpenseItem'

function Expenses (props){

    return (
        <div>
        <ExpensesItem
        date = {props.item[0].date}
        title= {props.item[0].title}
        amount = {props.item[0].amount}/>
          <ExpensesItem
        date = {props.item[0].date}
        title= {props.item[0].title}
        amount = {props.item[0].amount}/>
          <ExpensesItem
        date = {props.item[0].date}
        title= {props.item[0].title}
        amount = {props.item[0].amount}/>
          <ExpensesItem
        date = {props.item[0].date}
        title= {props.item[0].title}
        amount = {props.item[0].amount}/>
        </div>




    );

}

export default Expenses;