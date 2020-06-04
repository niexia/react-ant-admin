import { createStore } from 'redux';
import reducer from './reducer';

const { __REDUX_DEVTOOLS_EXTENSION__ } = window as any;

/**
 * createStore 接受 2 个参数
 * 1. Reducer，生成一个新的 Store
 * 以后每当store.dispatch发送过来一个新的 Action，就会自动调用 Reducer，得到新的 State
 * 2. 还可以接受一个表示 State 的最初状态的参数，这通常是服务器给出的
 * 注意，如果提供了这个参数，它会覆盖 Reducer 函数的默认初始值
 */
const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__());

export default store;