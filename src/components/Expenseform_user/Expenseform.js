import React from "react";
import './Expenseform.css'
 const Expenseform=()=>{
    const DateHandler=(event)=>{
    console.log(event.target.value);
    }
return(
    
    <div>
        <from className="my-form">
            <label htmlFor="date">Date</label>
            <input type="date" onChange={DateHandler}></input>
            <label htmlFor="purpose">purpose</label>
            <input type="text" ></input>
            <label htmlFor="price">price</label>
            <input type="number" ></input>
            <button type="submit">Add Expenses</button>
        </from>
    </div>

);

 }
 export {Expenseform};