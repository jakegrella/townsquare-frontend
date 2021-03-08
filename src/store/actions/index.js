import axiosWithAuth from '../../axiosWithAuth/axiosWithAuth'

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000';

// auth
// register
export const registerUser = (newUser) => (dispatch) => {
    axiosWithAuth()
        .post(`${BACKEND_URL}/auth/register`, newUser)
        .then((res) => {
            console.log(res)
            dispatch({ type: 'SET_USER', payload: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
}

// login
export const loginUser = (user) => (dispatch) => {
    axiosWithAuth()
        .post(`${BACKEND_URL}/auth/login`, user)
        .then((res) => {
            console.log(res)
            dispatch({ type: 'SET_USER', payload: res.data })
        })
        .catch((err) => {
            console.log(err.message)
        })
}