import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Layout, Input, Form, Button, Checkbox, Divider, message, notification } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { withRouter } from "react-router-dom";
import '../../style/view/login.scss'

type LoginProps = {
  match: any,
  location: any,
  history: any
};

type LoginState = {
  loading: boolean;
};

class Login extends Component<LoginProps, LoginState> {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  timerId: any = 0;

  constructor(props: any) {
    super(props);
    this.state = {
      loading: false
    }
  }

  componentDidMount() {
    notification.open({
      message: 'react-ant-admin 👏👏👏',
      duration: 1000,
      description: '{username: admin, password: any}'
    })
  }

  componentWillUnmount() {
    notification.destroy();
    this.timerId && clearTimeout(this.timerId);
  }

  doLoading = () => {
    this.setState({
      loading: true
    })
  }

  onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    values.auth = values.username === 'admin' ? 0 : 1;
    localStorage.setItem('loginInfo', JSON.stringify(values));
    this.timerId = setTimeout(() => {
      message.success('登录成功');
      this.props.history.push('/');
    }, 2000);
  }

  render() {
    return (
      <Layout className="page-login fadeIn">
        <div className="login-box">
          <h3>中后台管理系统</h3>
          <Divider />
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}>
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </div>
      </Layout>
    )
  }
}

export default withRouter(Login);