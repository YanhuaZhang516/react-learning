import React, { useContext } from "react";
import { ItemContext } from "../store/ItemProvider";

function Item(props) {
  const {monthNames} = useContext(ItemContext)
  
  return (
    <div className="expense-item">
      <div className="expense-date ">
        <div className="expense-date__month">{monthNames[props.month - 1]}</div>
        <div className="expense-date__year">{props.year}</div>
        <div className="expense-date__day">{props.day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.description}</h2>
      </div>
      <div className="expense-item__price">${props.price}</div>
    </div>
  );
}

export default Item;
