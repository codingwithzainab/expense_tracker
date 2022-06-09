import './Expenses.css';
import ExpensesItem from  './ExpenseItem'
import  Card from  '../UI/Card'
import './Expenses.css';
import React from 'react';

function Expenses (props){

    return (
        <Card className= " expenses">
        <ExpensesItem
        date = {props.item[0].date}
        title= {props.item[0].title}
        amount = {props.item[0].amount}/>

          <ExpensesItem
        date = {props.item[1].date}
        title= {props.item[1].title}
        amount = {props.item[1].amount}/>

          <ExpensesItem
        date = {props.item[2].date}
        title= {props.item[2].title}
        amount = {props.item[2].amount}/>
        
          <ExpensesItem
        date = {props.item[3].date}
        title= {props.item[3].title}
        amount = {props.item[3].amount}/>
        </Card>




    );

}

export default Expenses;