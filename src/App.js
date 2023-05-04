import { useState } from "react";
import "./App.css";
import { User } from "./List_User/User";
const App = () => {
  const [Users ,setUsers]=useState( [
      {date: new Date().toLocaleDateString(), amount: 150,  purpose: "education"},
      { date: new Date().toLocaleDateString(), purpose: "travel", amount: 200 },
      { date: new Date().toLocaleDateString(), purpose: "food ", amount: 2121 },
      {date: new Date().toLocaleDateString(), purpose: "skincare",amount: 1210,},
      { purpose: "health" },
      { date: new Date().toLocaleDateString(), amount: 2121 },
    { date: new Date().toLocaleDateString(), purpose: "room ", amount: 2121 },
    {date:"22/01/022" ,purpose:"nothing", amount:650},
  ]);
  const removeHandler = (index) => {
    console.log("hey")
    console.log(Users)
    const updatedUsers = [...Users]; // create a copy of the Users array
    updatedUsers.splice(index, 1); // remove the element at the specified index
    setUsers(updatedUsers); // update the state with the new array
    console.log(updatedUsers)
  };
  
  
  const expenseItems = Users.map((data, i) => {
    return <User info={data}  remove={()=>removeHandler(i)}key={i}></User>;
  });

  return <>{expenseItems}</>;
};

export default App;
