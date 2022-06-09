
import React from 'react';  
import Expenses from './components/Expenses/Expenses';

import NewExpense from './components/NewExpense/NewExpense';
const  App = () => {
let expenses = [
  {
    id: 'e1',
    title:'School Fee',
    amount:250,
    date: new Date (2021 , 5, 12)
  },
   {
    id: 'e2',
    title:'books',
    amount:230,
    date: new Date (2021 , 3, 12)
  },
   {
    id: 'e3',
    title:'House Rent',
    amount:270,
    date: new Date (2021 , 4, 12)
  },
  {
    id: 'e4',
    title:'Food',
    amount:550,
    date: new Date (2021 , 6, 12)
  },



]


  return (
   <div> 
      <NewExpense />
      <Expenses item={expenses}/>
  </div> 

  );

}

export default App;