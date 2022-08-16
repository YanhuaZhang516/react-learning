import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="expenses">
      <div className="expense-item">
        <div className='expense-date '>
          <div className='expense-date__month'>December</div>
          <div className='expense-date__year'>2011</div>
          <div className='expense-date__day'>01</div>
        </div>
        <h2>here is header2</h2>
        <div className="expense-item__price">$700</div> 
      </div>
      </div>  
    </div>
  );
}

export default App;
