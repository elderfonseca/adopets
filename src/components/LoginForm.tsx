import * as React from "react";
import { Form, Icon, Input, Button } from 'antd';

import { authenticationService } from "../services";

class LoginForm extends React.Component<{history: any, location: any, form: any}, {}> {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err: any) => {
      if (!err) {
        const { form } = this.props;
        let userName = form.getFieldValue('username');
        let passWord = form.getFieldValue('password');
        authenticationService.login(userName, passWord)
        // .then(
        //   user => {
        //     const { from } = this.props.location.state || { from: { pathname: "/" } };
        //     this.props.history.push(from);
        //   }
        // )
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <React.Fragment>
        <Form layout="vertical" onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Input your Username!'}],
            })(
              <Input
                prefix={<Icon type="user" />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </React.Fragment>
    )
  }
}

const WrappedLoginForm = Form.create({ name: 'login_form' })(LoginForm);

export default WrappedLoginForm;