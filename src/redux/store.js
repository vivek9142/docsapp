import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import documentReducer from './reducers/documentReducer';

const store = createStore(documentReducer,composeWithDevTools());

export default store;