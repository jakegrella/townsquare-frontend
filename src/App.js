// dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'

// components
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute.js';
// import IssueForm from './components/PostForm/IssueForm.js';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import CreatePost from './components/CreatePost';

function App() {
	// const id = localStorage.getItem('userId');

	// const [newIssue, setNewIssue] = useState({});

	// const onSubmitIssue = (formValues) => {
	// 	setNewIssue(formValues);
	// };

	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/signup' component={SignUp} />
				<PrivateRoute path='/dashboard/:user' component={Dashboard} />
				<PrivateRoute path='/create-post' component={CreatePost} />
			</Switch>
			<Toaster />
			<style jsx='true'>{`
				body {
					background: #fff;
				}
				h1 {
					font-family: 'M PLUS 1p', sans-serif;
					font-size: 4.8rem;
				}
				h2, h3, h4, h5, h6, a, p {
					font-family: 'Poppins', sans-serif;
				}
				h2 {
					font-size: 2.4rem;
				}

				a {
					text-decoration: none;
					color: #000;
				}
			`}</style>
		</div>
	);
}

export default App;
