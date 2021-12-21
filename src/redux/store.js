import {createStore,combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import documentReducer from './reducers/documentReducer';
import userReducer from './reducers/userReducer';

const reducer = combineReducers({
    documents:documentReducer,
    user:userReducer
});

const store = createStore(reducer,composeWithDevTools());

export default store;