import "./ChartBar.css";

function ChartBar({ monthName }) {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar_fill"></div>
      </div>

      <div className="chart-bar__label">{monthName}</div>
    </div>
  );
}
export default ChartBar;
