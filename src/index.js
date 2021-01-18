// react
import React from 'react';
import ReactDOM from 'react-dom';

// routing
import { BrowserRouter as Router } from 'react-router-dom';

// redux
// import {createStore, applyMiddleware, compose} from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { issuesReducer } from './reducer/index';

// components
import App from './App';

// styles
import './index.scss';

const store = createStore(issuesReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
