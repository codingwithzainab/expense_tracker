import ExpenseDate from './ExpenseDate.js';
import React , { useState  } from 'react'; 
import './ExpenseItem.css';

import Card from '../UI/Card'
const ExpenseItem = (props) =>{
    // const  [newtitle , setNewTitle] = useState('');

    //  const [title , setTitle] = useState(props.title);

    // const clickHandler = () =>{

    //     setTitle(newtitle)
    // }

    // const changeHandler = (event)=>{
    //     setNewTitle(event.target.value);
    // }
    
    return (
        <Card className='expense-item'>
           <ExpenseDate date={props.date}/>
            <div className='expense-item_description'>
                <h2>{props.title }</h2>
                <div className='expense-item_price'>$ {props.amount}</div>
            </div>
            {/* <input type="text" value={newtitle} onChange = {changeHandler}/>
            <button onClick={clickHandler}>change  Title </button>  */}
        </Card> 

    );
}

export default ExpenseItem ;