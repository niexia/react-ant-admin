import { MENU_TOGGLE } from './actionType';

/**
 * State 的变化，会导致 View 的变化。但是，用户接触不到 State，只能接触到 View
 * 所以，State 的变化必须是 View 导致的。
 * Action 就是 View 发出的通知，表示 State 应该要发生变化了。
 *
 * Action 是一个对象。其中的type属性是必须的，表示 Action 的名称。其他属性可以自由设置
 * @example
 * const action = {
 *   type: 'ADD_TODO',
 *   payload: 'Learn Redux'
 * };
 * Action 的名称是ADD_TODO，它携带的信息是字符串Learn Redux
 *
 * View 要发送多少种消息，就会有多少种 Action。
 * 如果都手写，会很麻烦。可以定义一个函数来生成 Action，
 * 这个函数就叫 Action Creator。
 * @example
 * const ADD_TODO = "addTodo"
 * function addTodo(text) {
 *   return {
 *     type: ADD_TODO,
 *     text
 *   }
 * }
 * const action = addTodo('Learn Redux');
 *
 * store.dispatch()是 View 发出 Action 的唯一方法。
 * store.dispatch接受一个 Action 对象作为参数，将它发送出去
 * @example
 * store.dispatch(addTodo('Learn Redux'));
 */

const menuToggleAction = () => ({
  type: MENU_TOGGLE
});

export { menuToggleAction }

