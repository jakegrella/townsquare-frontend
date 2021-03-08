import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import user from './reducers/user';

 const rootReducer = combineReducers({
     user: user
 });

 const configureStore = () => {
     return createStore(
         rootReducer,
         compose(applyMiddleware(thunk))
     );
 };

 export default configureStore;