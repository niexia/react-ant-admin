import { createStore } from 'redux';
import reducer from './reducer';

const { __REDUX_DEVTOOLS_EXTENSION__ } = window as any;
const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__());

export default store;