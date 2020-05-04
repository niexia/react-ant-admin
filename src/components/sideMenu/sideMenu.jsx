import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "antd";
import CustomIcon from "../common/customIcon";
// import { UserOutlined, LockOutlined } from '@ant-design/icons';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openKeys: [],
      selectedKeys: []
    };
  }

  componentDidMount() {
    const { pathname } = this.props.location;
    this.setState({
      selectedKeys: [pathname],
      openKeys: this.getOpenKeys(pathname)
    });
  }

  componentDidUpdate(preProps, prevState) {
    const { pathname } = this.props.location;
    const { pathname: prePathname } = preProps.location;
    if (prePathname !== pathname) {
      this.setState({
        selectedKeys: [pathname],
        openKeys: this.getOpenKeys(pathname)
      })
    }
  }

  /**
   * 获取 path 的数组
   */
  getOpenKeys = string => {
    if (!string) return [];
    let strArr = string.split('/').map(p => `/${p}`),
        newStr = '',
        newArr = [];
    for (let i = 1, j = strArr.length - 1; i < j; i++) {
      newStr += strArr[i];
      newArr.push(newStr);
    }
    return newArr;
  }

  /**
   * 展开一个菜单
   */
  onOpenChange = (keys = []) => {
    const { length } = keys;
    if (length < 2) {
      this.setState({
        openKeys: keys
      });
      return;
    }
    // 最新展开的菜单
    const latestOpenKey = keys[length - 1];
    // 判断是否是嵌套的多级菜单
    latestOpenKey.includes(keys[0])
      ? this.setState({ openKeys: keys })
      : this.setState({ openKeys: [latestOpenKey] })
  }

  renderMenuItem = ({ key, icon, title }) => {
    return (
      <Menu.Item key={key}>
        <Link to={key}>
          {icon && <CustomIcon icon={icon}/>}
          <span>{title}</span>
        </Link>
      </Menu.Item>
    )
  }

  renderSubMenu = ({ key, icon, title, subs }) => {
    const { renderMenuItem, renderSubMenu } = this;
    return (
      <Menu.SubMenu
        key={key}
        title={
          <span>
            {icon && <CustomIcon icon={icon} />}
            <span>{title}</span>
          </span>
        }>
        {
          subs && subs.map(item => item.subs && item.subs.length > 0 ? renderSubMenu(item) : renderMenuItem(item))
        }
      </Menu.SubMenu>
    )
  }

  render() {
    const { openKeys, selectedKeys } = this.state;
    const { renderMenuItem, renderSubMenu } = this;
    return (
      <Menu
        mode='inline'
        theme='dark'
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        onClick={({ key }) => this.setState({ selectedKeys: [key] })}
        onOpenChange={this.onOpenChange}>
        {
          this.props.menu && this.props.menu.map(item => {
            const { subs } = item;
            return subs && subs.length > 0 ? renderSubMenu(item) : renderMenuItem(item);
          })
        }
      </Menu>
    )
  }
}

SideMenu.propTypes = {
  menu: PropTypes.array.isRequired
}

export default withRouter(SideMenu);