import React, { Component } from 'react';
import { WingBlank, DrInputItem, DrButton, WhiteSpace } from '@dr/dr-component-mobile';
import { createForm } from 'rc-form';

class App extends Component {
  componentDidMount() {
    // this.props.form.validateFields();
  }
  login = () => {
    const { validateFields } = this.props.form;

    validateFields((errors, values) => {
      if (!errors) {
        fetch('/login', {
          method: 'POST',
          body: JSON.stringify(values),
        });
      }
    });
  }
  validateUserName = (rule, value, callback) => {
    setTimeout(() => {
      if (value && value.indexOf('qq.com') > -1) {
        callback('User not exist');
      } else {
        callback();
      }
    }, 1000);
  }
  render() {
    const { getFieldDecorator, getFieldError/*, getFieldsError, isFieldsValidating*/ } = this.props.form;

    // const fieldsError = getFieldsError();
    // const disableSubmitBtn = isFieldsValidating() || Object.keys(fieldsError).filter(v => fieldsError[v]).length;

    return (
      <WingBlank>
        {
          getFieldDecorator('usr', {
            validateFirst: true,
            rules: [
              { required: true, message: 'Please input your username' },
              { type: 'email', message: 'Username must be email' },
              { validator: this.validateUserName }
            ],
          })(
            <DrInputItem title="username" type="text" error={getFieldError('usr')} placeholder="username" />
          )
        }
        {
          getFieldDecorator('pwd', {
            rules: [
              { required: true, message: 'Please input your password' },
              { min: 6, max: 8, message: 'Password must be between 6 and 8 characters' },
              { pattern: /[A-Z]/, message: 'Password must contain at least 1 uppercase letters' }
            ],
          })(
            <DrInputItem title="password" type="password" error={getFieldError('pwd') && getFieldError('pwd').join('. ')} placeholder="password" />
          )
        }
        <WhiteSpace />
        <DrButton type="primary" onClick={this.login}/* disabled={disableSubmitBtn}*/>login</DrButton>
      </WingBlank>
    );
  }
}

export default createForm()(App);
