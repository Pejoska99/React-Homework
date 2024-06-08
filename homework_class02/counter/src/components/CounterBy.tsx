import { useState } from "react";

const CounterBy = () => {
  const [counter, setCounter] = useState<number>(0);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

 
   const handleInputChange = (value: string) => {
    setInputValue(value);
    setErrorMessage(''); 
    console.log("Input value:", value);
  };

  

  const handleIncrement = () => {
    if (inputValue === '') {
      setCounter(counter + 1);
      console.log("Counter after increment without value:", counter + 1);
      return;
    }

    const value = parseInt(inputValue, 10);
    if (isNaN(value)) {
      setErrorMessage('The input is not a number, please change it.');
      return;
    }
    if (value < 0) {
      setErrorMessage('The input is a negative number, please change it.');
      return;
    }
    setCounter(counter + (value || 1)); 
    console.log("Counter after increment with value:", counter + (value || 1));
  };

  const handleDecrement = () => {

    if (inputValue === '') {
      setCounter(counter - 1);
      console.log("Counter after decrement without value:", counter - 1);
      return;
    }

    const value = parseInt(inputValue, 10);
    if (isNaN(value)) {
      setErrorMessage('The input is not a number, please change it.');
      return;
    }
    if (value < 0) {
      setErrorMessage('The input is a negative number, please change it.');
      return;
    }
    setCounter(counter - (value || 1)); 
    console.log("Counter after decrement with value:", counter - (value || 1));
  };

  return (
    <div>
      <h2>CounterBy</h2>
      <input type="text" 
      value={inputValue} 
      onChange={(event) => handleInputChange(event.target.value)} />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      {errorMessage && (
        <div style={{ backgroundColor: 'red', color: 'white', padding: '5px' }}>
          {errorMessage}
        </div>
      )}
      <p>Counter Value: {counter}</p>
    </div>
  );
};

export default CounterBy;
