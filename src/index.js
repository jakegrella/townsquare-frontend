// react
import React from 'react';
import ReactDOM from 'react-dom';

// routing
import { BrowserRouter as Router } from 'react-router-dom';

// components
import App from './App';

// styles
import './reset.css';

ReactDOM.render(
		<Router>
			<App />
		</Router>,
	document.getElementById('root')
);
