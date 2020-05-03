import React, { Component } from 'react';
import { Layout, Input, Form, Button, Divider, message, notification } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { withRouter } from "react-router-dom";

type LoginProps = {
  form: any;
  history: any;
};

type LoginState = {
  loading: boolean;
};

class Login extends Component<LoginProps, LoginState> {
  timerId: any = 0;

  constructor(props: any) {
    super(props);
    this.state = {
      loading: false
    }
  }

  componentDidMount() {
    notification.open({
      message: '一起学 react 👏👏👏',
      duration: 1000,
      description: '{account: admin, password: any}'
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

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((valid: boolean, values: any) => {
      if (!valid) {
        values.auth = values.username === 'admin' ? 0 : 1;
        localStorage.setItem('loginInfo', JSON.stringify(values));
        this.timerId = setTimeout(() => {
          message.success('登录成功');
          this.props.history.push('/');
        }, 2000);
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout className="page-login fadeIn">
        <div className="login-box">
          <div className="login-form">
            <h3>后台管理系统</h3>
            <Divider />
            <Form onSubmit={this.handleSubmit}>
              <Form.Item>
                {
                  getFieldDecorator('username', {
                    rules:[{ required: true, message: '请输入用户名'}]
                  })
                  (
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
                  )
                }
              </Form.Item>
              <Form.Item>
                {
                  getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码' }]
                  })
                  (
                    <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请输入密码" />
                  )
                }
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" loading={this.state.loading}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Layout>
    )
  }
}

export default withRouter(Form.create()(Login));