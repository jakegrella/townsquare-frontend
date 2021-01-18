import { useHistory } from 'react-router-dom';

const LoggedHeader = () => {
	const { push } = useHistory();

	const logOut = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		push('/login');
	};

	return (
		<header>
			<h1>COMAKE</h1>

			<button onClick={logOut}>log out</button>
		</header>
	);
};

export default LoggedHeader;
