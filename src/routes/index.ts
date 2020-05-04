import loadable from '../utils/loadable';

const Home = loadable(() => import(/* webpackChunkName: 'home' */ '../views/home'));

const routes = [
  { path: '/index', exact: true, name: 'Index', component: Home, auth: [1] },
  { path: '/public/button', exact: false, name: '按钮', component: Home, auth: [1] },
  { path: '/public/icon', exact: false, name: '图标', component: Home, auth: [1] },
  { path: '/nav/dropdown', exact: false, name: '下拉菜单', component: Home },
  { path: '/nav/menu', exact: false, name: '下拉菜单', component: Home },
  { path: '/nav/steps', exact: false, name: '步骤条', component: Home },
  { path: '/form/base-form', exact: false, name: '表单', component: Home },
  { path: '/form/step-form', exact: false, name: '表单', component: Home },
  { path: '/show/table', exact: false, name: '表格', component: Home },
  { path: '/show/collapse', exact: false, name: '折叠面板', component: Home },
  { path: '/show/tree', exact: false, name: '树形控件', component: Home },
  { path: '/show/tabs', exact: false, name: '标签页', component: Home },
  { path: '/others/progress', exact: false, name: '进度条', component: Home, auth: [1] },
  { path: '/others/animation', exact: false, name: '动画', component: Home, auth: [1] },
  { path: '/others/editor', exact: false, name: '富文本', component: Home, auth: [1] },
  { path: '/others/upload', exact: false, name: '上传', component: Home, auth: [1] },
  { path: '/one/two/three', exact: false, name: '三级', component: Home },
  { path: '/about', exact: false, name: '关于', component: Home, auth: [1] }
]

export default routes;