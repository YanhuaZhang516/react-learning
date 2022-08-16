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
  var today = new Date();
  return (
    <div className="expense-item">
      <div className="expense-date ">
        <div className="expense-date__month">
          {monthNames[today.getMonth()]}
        </div>
        <div className="expense-date__year">{today.getFullYear()}</div>
        <div className="expense-date__day">{today.getDate()}</div>
      </div>
      <h2>here is header2</h2>
      <div className="expense-item__price">$700</div>
    </div>
  );
}

export default Item;
