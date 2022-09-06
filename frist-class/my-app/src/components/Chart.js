import "./Chart.css";
import ChartBar from "./ChartBar";
import { uid } from "uid";

function Chart() {
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
    <div className="chart">
      {monthNames.map((monthName) => (
        <ChartBar monthName={monthName.slice(0, 3)} key={uid(5)}></ChartBar>
      ))}

      {/* <ChartBar monthName={"Jan"}></ChartBar>
      <ChartBar monthName={"Feb"}></ChartBar> */}
    </div>
  );
}

export default Chart;
