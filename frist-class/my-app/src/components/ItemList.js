import { uid } from "uid";
import Item from "./Item";
import { useContext, useMemo } from "react";
import { ItemContext } from "../store/ItemProvider";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import Chart from "./Chart";

function ItemList() {
  const { items } = useContext(ItemContext);
  const [selectYear, setSelectYear] = useState("2022");

  const filteredItems = useMemo(() => {
    return items.filter((item) => item.year === selectYear);
  }, [items, selectYear]);

  return (
    <div className="expenses">
      <ExpenseFilter
        selectYear={selectYear}
        setSelectYear={setSelectYear}
      ></ExpenseFilter>
      <Chart></Chart>
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <Item
            key={uid(5)}
            year={item.year}
            month={item.month}
            day={item.day}
            description={item.description}
            price={item.price}
          ></Item>
        ))
      ) : (
        <div className="not-content">No expense item found</div>
      )}
    </div>
  );
}

export default ItemList;
