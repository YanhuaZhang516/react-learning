import React, { createContext, useEffect, useState } from "react";
import { fetchItems } from "../api/fetchItems";

export const ItemContext = createContext();
const ItemProvider = ({ children }) => {
  
  const [items, setItems] = useState([]);

  useEffect(()=>{
    fetchItems().then((data)=>{
      setItems(data);
    })
  },[])

  const addItem = (item) => {
    setItems([item, ...items]);
  };

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
    <ItemContext.Provider value={{ items, addItem, monthNames }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
