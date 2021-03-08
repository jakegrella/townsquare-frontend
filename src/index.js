// react
import React from 'react';
import ReactDOM from 'react-dom';

// routing
import { BrowserRouter as Router } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import configureStore from './store/store';

import * as serviceWorker from './serviceWorker';

// components
import App from './App';

// styles
import './reset.css';

const store = configureStore();


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
