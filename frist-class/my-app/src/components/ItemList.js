import Item from "./item";

function ItemList() {
  const items = [
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
  return (
    <div>
      {items.map((item) => (
        <Item
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
