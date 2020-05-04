import React from 'react';
import PropTypes from "prop-types";
import { Menu, Dropdown, Layout, Row, Col, Avatar, Badge } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  GithubOutlined,
  NotificationOutlined
} from '@ant-design/icons';

const { Header } = Layout;

function PageHeader(props: any) {
  const { menuClick, menuToggle, loginOut } = props;
  const menu = (
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
          退出登录
        </span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="app-header">
      <Row>
        <Col span={12}>
          {React.createElement(menuToggle ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'side-trigger',
            onClick: menuClick,
          })}
        </Col>
        <Col span={12} className="header-right">
          <div className="github-btn btn-item">
            <a rel='noopener noreferrer' href='https://github.com/niexias/react-ant-admin' target='_blank'>
              <GithubOutlined />
            </a>
          </div>
          <div className="notify-btn btn-item">
            <Badge dot>
              <a href="/#/index">
                <NotificationOutlined />
              </a>
            </Badge>
          </div>
          <div className="user-btn btn-item">
            <Dropdown 
              overlay={menu}
              trigger={['click']}>
              <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </Dropdown>
          </div>
        </Col>
      </Row>
    </Header>
  )
}

PageHeader.propTypes = {
  menuClick: PropTypes.func,
  avatar: PropTypes.string,
  menuToggle: PropTypes.bool,
  loginOut: PropTypes.func
}

export default React.memo(PageHeader);