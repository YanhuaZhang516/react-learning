import "./Chart.css";
import ChartBar from "./ChartBar";
import { uid } from "uid";

function Chart({filteredItems}) {
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
  const ChartMap = new Map();
  monthNames.map((monthName)=> (ChartMap.set(monthName,0)))

  filteredItems.map((item)=>
   (ChartMap.set(monthNames[item.month-1],ChartMap.get(monthNames[item.month-1])+item.price))
)

const MaxValue = Math.max(...ChartMap.values())
console.log(MaxValue)
console.log("here is maxValue====="+MaxValue)
console.log(ChartMap.get(monthNames[2]))


  return (
    <div className="chart">
      {monthNames.map((monthName) => (
        <ChartBar monthName={monthName.slice(0, 3)} key={uid(5)} maxValue={MaxValue} monthPrices={ChartMap.get(monthName)} ></ChartBar>
      ))}
    </div>
  );
}

export default Chart;
