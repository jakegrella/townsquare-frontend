import axios from 'axios';

const axiosWithAuth = () => {
	const token = localStorage.getItem('token');
	return axios.create({
		baseURL: 'https://comake-bw-node-jg.herokuapp.com/',
		headers: {
			authorization: token,
		},
	});
};

export default axiosWithAuth;
