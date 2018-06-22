import React, { Component } from 'react';
import './CalculatorV2.css';

class CalculatorV2 extends Component {
  render() {
    return (
      <div className="calculator">
        <input/>
        <select name="" id="">
          <option value="+">+</option>
          <option value="-">-</option>
        </select>
        <input/>
        <button>Get result</button>
        <div>
          Result: <span>0</span>
        </div>
      </div>
    );
  }
}

export default CalculatorV2;
