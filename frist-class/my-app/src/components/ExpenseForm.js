import "./ExpenseForm.css";
import React, { useState } from "react";
import { useContext } from "react";
import { ItemContext } from "../store/ItemProvider";
import axios from "axios"
// import { postItem } from "../api/postItem";

function ExpenseForm() {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");
  const { addItem } = useContext(ItemContext);

  const ITEMS_URL = 'http://localhost:3000/posts'
  const postItem=(item)=>axios.post(ITEMS_URL,item).then((response)=>response.config.data).then((data)=>{
    console.log(data)
  }).then(addItem(item))


  function submitHandler(e) {
    e.preventDefault();
    let [year, month, day] = newDate.split("-");
    const item = {
      year: year,
      month: Number(month),
      day: day,
      description: newTitle,
      price: Number(newAmount),
    };
    // addItem(item);
    postItem(item);
    setNewTitle("");
    setNewAmount("");
    setNewDate("");

   

  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={newDate}
            onChange={(e) => {
              setNewDate(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
