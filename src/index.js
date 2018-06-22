import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CalculatorV2 from './CalculatorV2';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div>	
		<App />
		<CalculatorV2 />

	</div>, document.getElementById('root'));
registerServiceWorker();
