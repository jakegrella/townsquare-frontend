// react
import React from 'react';
import ReactDOM from 'react-dom';
// redux
import { Provider } from 'react-redux'
import store from './store/store'
// routing
import { BrowserRouter as Router } from 'react-router-dom';
// components
import App from './App';
// styles
import './reset.css';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
