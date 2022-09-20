import "./Chart.css";
import ChartBar from "./ChartBar";
import { uid } from "uid";
import React, { useContext } from "react";
import { ItemContext } from "../store/ItemProvider";

function Chart({filteredItems}) {
  const {monthNames} = useContext(ItemContext)
  const ChartMap = new Map();
  monthNames.map((monthName)=> (ChartMap.set(monthName,0)))

  filteredItems.map((item)=>
   (ChartMap.set(monthNames[item.month-1],ChartMap.get(monthNames[item.month-1])+item.price))
)

const MaxValue = Math.max(...ChartMap.values())


  return (
    <div className="chart">
      {monthNames.map((monthName) => (
        <ChartBar monthName={monthName.slice(0, 3)} key={uid(5)} maxValue={MaxValue} monthPrices={ChartMap.get(monthName)} ></ChartBar>
      ))}
    </div>
  );
}

export default Chart;
