import { useState } from 'react';
import './MyCalculator.css';

function MyCalculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('錯誤');
      }
    } else if (value === 'C') {
      setInput('');
    } else if (value === 'CE') {
      setInput(input.replace(/[\d.]+$|[\+\-\*\/]$/, ''));
    } else if (value === '←') {
      setInput(input.slice(0, -1));
    } else if (value === '+-') {
      if (input) {
        try {
          const flipped = eval(`-1 * (${input})`);
          setInput(flipped.toString());
        } catch {
          setInput('錯誤');
        }
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C', 'CE', '+-', '←'
  ];

  return (
    <div className="calculator">
      <input
        className="calculator-display"
        type="text"
        value={input}
        disabled
      />
      <div className="calculator-buttons">
        {buttons.map((btn, index) => (
          <button key={index} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MyCalculator;
