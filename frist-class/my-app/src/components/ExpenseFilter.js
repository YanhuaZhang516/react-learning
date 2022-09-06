import "./ExpenseFilter.css";

function ExpenseFilter({ selectYear, setSelectYear }) {
  const handleChange = (e) => {
    setSelectYear(e.target.value);
  };

  return (
    <div className="expenses-filter ">
      <div className="expenses-filter__control">
        <label htmlFor="year-filter">Filter by year</label>
        <select
          name="filters"
          id="year-filter"
          value={selectYear}
          onChange={handleChange}
        >
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
