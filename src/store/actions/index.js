import axiosWithAuth from '../../axiosWithAuth/axiosWithAuth'

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000';

// 🌕  auth
// register
export const registerUser = (newUser) => (dispatch) => {
    axiosWithAuth()
        .post(`${BACKEND_URL}/auth/register`, newUser)
        .then((res) => {
            console.log('registerUser', res)
            dispatch({ type: 'SET_USER', payload: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
}

// login
export const loginUser = (user) => (dispatch) => {
    return axiosWithAuth()
        .post(`${BACKEND_URL}/auth/login`, user)
        .then((res) => {
            dispatch({ type: 'SET_USER', payload: res.data })
            localStorage.setItem('token', res.data.token)
            // dispatch({ type: 'SET_TOKEN', payload: localStorage.getItem('token') })
            return res
        })
        .catch((err) => {
            console.log(err.message)
        })
}

// logout
export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('token')
}

// 🌕  posts
// get all posts for logged in user by username
export const fetchUserPosts = (username) => (dispatch) => {
    axiosWithAuth()
        .get(`${BACKEND_URL}/api/posts/u/${username}`)
        .then((res) => {
            console.log(res)
            dispatch({ type: 'SET_USER_POSTS', payload: res.data })
        })
        .catch((err) => {
            console.log('500 error fetchUserPosts', err.message);
        })
}

// get all local posts
export const fetchLocalPosts = () => (dispatch) => {
    axiosWithAuth()
    // I do not think this is working correctly right now
    .get(`/api/posts/l/${localStorage.getItem('location')}`)
    .then((res) => {
        console.log(res);
        dispatch({ type: 'SET_LOCAL_POSTS', payload: res.data })
    })
    .catch((err) => {
        console.log('500 error fetchLocalPosts', err.message);
    });
}

// get all posts (global)
export const fetchAllPosts = () => (dispatch) => {
    axiosWithAuth()
        .get(`${BACKEND_URL}/api/posts`)
        .then((res) => {
            console.log(res);
            dispatch({ type: 'SET_GLOBAL_POSTS', payload: res.data })
        })
        .catch((err) => {
            console.log('500 error fetchAllPosts', err.message);
        });
}