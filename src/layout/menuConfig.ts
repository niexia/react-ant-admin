const menuConfig = [
  {
    key: '/index',
    title: '首页',
    icon: 'HomeOutlined',
    auth: [1]
  },
  {
    title: '通用',
    key: '/public',
    icon: 'appstore',
    auth: [1],
    subs: [
      { title: '按钮', key: '/public/button', icon: '' }, 
      { title: '图标', key: '/public/icon', icon: '' }
    ]
  },
  {
    title: '导航',
    key: '/nav',
    icon: 'AppstoreOutlined',
    subs: [
      { title: '下拉菜单', key: '/nav/dropdown', icon: '' },
      { title: '导航菜单', key: '/nav/menu', icon: '' },
      { title: '步骤条', key: '/nav/steps', icon: '' }
    ]
  },
  {
    title: '表单',
    key: '/form',
    icon: 'FormOutlined',
    subs: [
      { title: '基础表单', key: '/form/base-form', icon: '' },
      { title: '步骤表单', key: '/form/step-form', icon: '' }
    ]
  },
  {
    title: '展示',
    key: '/show',
    icon: 'BarsOutlined',
    subs: [
      { title: '表格', key: '/show/table', icon: '' },
      { title: '折叠面板', key: '/show/collapse', icon: '' },
      { title: '树形控件', key: '/show/tree', icon: '' },
      { title: '标签页', key: '/show/tabs', icon: '' }
    ]
  },
  {
    title: '异常页面',
    key: '/exception',
    icon: 'AlertOutlined',
    auth: [1],
    subs: [
      { title: '404', key: '/404', icon: '' },
      { title: '500', key: '/500', icon: '' },
      {
        title: '二级',
        key: '/exception/2',
        icon: '',
        subs: [{ title: '三级', key: '/exception/2/403', icon: '' }]
      }
    ]
  },
  {
    title: '关于',
    key: '/about',
    icon: 'ProfileOutlined',
    auth: [1]
  }
];

export default menuConfig;