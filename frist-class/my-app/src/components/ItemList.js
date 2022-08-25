import { uid } from "uid";
import Item from "./Item";
import { useContext } from "react";
import { ItemContext } from "../store/ItemProvider";

function ItemList() {
  const { items } = useContext(ItemContext);
  return (
    <div className="expenses">
      {items.map((item) => (
        <Item
          key={uid(5)}
          year={item.year}
          month={item.month}
          day={item.day}
          description={item.description}
          price={item.price}
        ></Item>
      ))}
    </div>
  );
}

export default ItemList;
