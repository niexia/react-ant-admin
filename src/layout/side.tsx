import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from "antd";
import { GithubOutlined } from '@ant-design/icons';
import SideMenu from "../components/sideMenu/sideMenu";

const { Sider } = Layout;

function PageSide(props: any) {
  let { menuToggle, menu } = props;
  return (
    <Sider trigger={null} className="app-side" collapsible collapsed={menuToggle}>
      <div className="side-logo">
        <a rel='noopener noreferrer' href='https://github.com/niexias' target='_blank'>
          <GithubOutlined />
        </a>
      </div>
      <SideMenu menu={menu}/>
    </Sider>
  )
}

PageSide.propTypes = {
  menuToggle: PropTypes.bool,
  menu: PropTypes.array.isRequired
}

export default PageSide;