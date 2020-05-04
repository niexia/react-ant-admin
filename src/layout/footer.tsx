import React from 'react'
import { Layout } from "antd";

const { Footer } = Layout;

function PageFooter() {
  return (
    <Footer className="app-footer">
      react-ant-admin &copy; 2020-{new Date().getFullYear()} Created by niexias
    </Footer>
  );
}

export default PageFooter;