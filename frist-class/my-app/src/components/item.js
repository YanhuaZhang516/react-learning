import React from "react";

function Item(props) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="expense-item">
      <div className="expense-date ">
        <div className="expense-date__month">{monthNames[props.month - 1]}</div>
        <div className="expense-date__year">{props.year}</div>
        <div className="expense-date__day">{props.day}</div>
      </div>
      <h2>{props.description}</h2>
      <div className="expense-item__price">{props.price}</div>
    </div>
  );
}

export default Item;
