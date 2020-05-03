import React from 'react';
import PropTypes from "prop-types";
import { Menu, Dropdown, Layout, Avatar, Badge } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined
} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

function Header(props) {
  const { menuClick, menuToggle, avatar, loginOut } = props;
  const dropMenu = (
    <Menu>
      <Menu.ItemGroup title='用户设置'>
        <Menu.Divider />
        <Menu.Item>
          <UserOutlined />
          个人设置
        </Menu.Item>
        <Menu.Item>
          <SettingOutlined />
          系统设置
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.Divider />
      <Menu.Item>
        <span onClick={loginOut}>
          <LogoutOutlined />
          推出登录
        </span>
      </Menu.Item>
    </Menu>
  );
}

