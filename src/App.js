// react
// import React, { useState } from 'react';
import React from 'react';

// router
import { Route, Switch } from 'react-router-dom';

// components
import Login from './components/LogIn/JGLogIn';
// import Login from './components/LogIn/LogIn.js';
import UserHome from './components/UserHome.js';
import IssuesListPage from './components/IssuesListPage.js';
import NavBar from './components/Headers/Header.js';
import PrivateRoute from './components/PrivateRoute.js';
import IssuePage from './components/IssuePage.js';
import IssueForm from './components/PostForm/IssueForm.js';
import SignUp from './components/SignUp/SignUp';

// styles
import './App.scss';

function App() {
	// const id = localStorage.getItem('userId');

	// const [newIssue, setNewIssue] = useState({});

	// const onSubmitIssue = (formValues) => {
	// 	setNewIssue(formValues);
	// };

	return (
		<div className='App'>
			<Switch>
				<Route exact path='/login' component={Login} />
				<Route exact path='/signup' component={SignUp} />
				<PrivateRoute path='/userHome' component={NavBar} />
				<PrivateRoute path='/issuesListPage' component={NavBar} />
				<PrivateRoute path='/issues/:id' component={NavBar} />
				<PrivateRoute path='/issues/:id' component={IssuePage} />
				<PrivateRoute path='/userHome/' component={UserHome} />
				<PrivateRoute path='/issuesListPage' component={IssuesListPage} />
				<PrivateRoute path='/submitIssue' component={IssueForm} />
				{/* <PrivateRoute
					path='/submitIssue'
					render={(props) => {
						return <IssueForm onSubmit={onSubmitIssue} />;
					}}
				/> */}
			</Switch>
		</div>
	);
}

export default App;
