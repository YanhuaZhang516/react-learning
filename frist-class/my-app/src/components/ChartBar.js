import "./ChartBar.css";

function ChartBar({ monthName, maxValue, monthPrices}) {
  let barFillHeight = "0%"
  if (maxValue>0){
    barFillHeight = Math.round((monthPrices/maxValue)*100) +"%"
  }
  console.log("price========>"+monthPrices)
  console.log("max value ======"+maxValue)
  console.log("monthName====="+monthName)
  console.log(barFillHeight)

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{monthName}</div>
    </div>
  );
}
export default ChartBar;
