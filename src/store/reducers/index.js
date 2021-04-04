const initialState = {
  user: {},
  token: '',
  userPosts: [],
  localPosts: [],
  globalPosts: []
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };

    case 'SET_TOKEN':
      return { ...state, token: action.payload };

    case 'SET_USER_POSTS':
      return { ...state, userPosts: action.payload };

    case 'SET_LOCAL_POSTS':
      return { ...state, localPosts: action.payload };

    case 'SET_GLOBAL_POSTS':
      return { ...state, globalPosts: action.payload };

    default:
      return state;
  }
};

export default reducer;
