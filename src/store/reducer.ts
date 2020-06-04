import { MENU_TOGGLE } from './actionType';

/**
 * 整个应用的初始状态，可以作为 State 的默认值
 */
const defaultState = {
  menuToggle: false
};

/**
 * Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。
 * 这种 State 的计算过程就叫做 Reducer
 *
 * Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State
 *
 * Reducer 函数最重要的特征是，它是一个纯函数，
 * 也就是说，只要是同样的输入，必定得到同样的输出。
 * 所以 Reducer 函数里面不能改变 State，必须返回一个全新的对象
 *
 * @param {*} [state=defaultState]
 * @param {*} action
 * @returns
 */
export default function reducer(state = defaultState, action: any) {
  const { type } = action;
  switch (type) {
    case MENU_TOGGLE:
      return { ...state, menuToggle: !state.menuToggle}
    default:
      return state
  }
}