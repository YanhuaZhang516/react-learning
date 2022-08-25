import React, { createContext, useState } from "react";

export const ItemContext = createContext();
const ItemProvider = ({ children }) => {
  const intialItems = [
    {
      year: "2011",
      month: 12,
      day: "01",
      description: "House Issurance",
      price: "$700",
    },
    {
      year: "2012",
      month: 1,
      day: "01",
      description: "New Car",
      price: "$3000",
    },
    {
      year: "2013",
      month: 11,
      day: "06",
      description: "New TV",
      price: "$350",
    },
  ];
  const [items, setItems] = useState(intialItems);

  const addItem = (item) => {
    setItems([item, ...items]);
  };

  return (
    <ItemContext.Provider value={{ items, addItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
