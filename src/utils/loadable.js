import React, { Component } from 'react';
import Loadable from 'react-loadable';
import NProgress from 'nprogress';
import { Spin } from 'antd';
import 'nprogress/nprogress.css';
import '../style/view/loading.scss'

class Loading extends Component {
  constructor(props) {
    super(props);
    NProgress.start();
  }

  componentDidMount() {
    NProgress.done();
  }

  render() {
    return <div className="page-loading">
      <Spin />
    </div>
  }
}

export default (loader, loading = Loading) => {
  return Loadable({
    loader,
    loading
  });
}