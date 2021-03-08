import { Types } from './actionTypes'
import axiosWithAuth from '../../axiosWithAuth/axiosWithAuth'
import toast from 'react-hot-toast';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000'

// // authentication
// export const authSuccess = (history) => (dispatch) => {
// 	axiosWithAuth()
// 		.get(`${BACKEND_URL}/api/user`)
// 		.then((res) => {
// 			console.log(res)
// 		})
// }

// export const fetchUser = () => (dispatch) => {
// 	axiosWithAuth()
// 		.get(`${BACKEND_URL}/api/user`)
// 		.then((res) => {
// 			console.log('action -> fetchUser',res)
// 			dispatch({ type: 'SET_USER', payload: res.data.user })
// 			toast.success('Welcome')
// 		})
// 		.catch((err) => {
// 			console.log('ERR action -> fetchUser', err.message)
// 			toast.error('There was a problem loading the user.')
// 		})
// }

export const ActionCreators = {
	addUser: (user) => ({ type: Types.ADD_USER, payload: { user } }),
	fetchUser: (user) => ({ type: Types.FETCH_USER, payload: { user } })
}