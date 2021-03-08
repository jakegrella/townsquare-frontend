import { Types } from '../actions/actionTypes'

const initialState = {
	user: {},
	users: [],
	posts: [],
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case Types.FETCH_USER:
			console.log('fetch user', action.payload.user)
			return {
				...state,
				user: action.payload.user,
			}
		
		case Types.ADD_USER:
			return {
				...state,
				user: action.payload.user,
			}

		default:
			return state;
	}
};

export default reducer;