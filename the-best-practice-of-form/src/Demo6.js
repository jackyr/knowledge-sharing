import React, { Component } from 'react';
import { WingBlank, DrInputItem, DrButton, WhiteSpace } from '@dr/dr-component-mobile';
import { createForm } from 'rc-form';

class App extends Component {
  componentDidMount() {
    const { setFieldsValue } = this.props.form;

    setTimeout(() => {
      setFieldsValue({
        usr: 'cba',
        pwd: '321'
      });
    }, 500);

    // setFieldsValue(JSON.parse(sessionStorage.getItem('draft')));
  }
  login = () => {
    const { getFieldsValue } = this.props.form;

    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(getFieldsValue()),
    });
  }
  reset = () => {
    const { resetFields } = this.props.form;

    resetFields();
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <WingBlank>
        {
          getFieldDecorator('usr', {
            initialValue: 'abc'
          })(
            <DrInputItem title="username" type="text" placeholder="username" />
          )
        }
        {
          getFieldDecorator('pwd', {
            initialValue: '123'
          })(
            <DrInputItem title="password" type="password" placeholder="password" />
          )
        }
        <WhiteSpace />
        <DrButton type="primary" onClick={this.login}>login</DrButton>
        <WhiteSpace />
        <DrButton onClick={this.reset}>reset</DrButton>
      </WingBlank>
    );
  }
}

export default createForm({
  // onValuesChange: (props, changedValues, allValues) => {
  //   sessionStorage.setItem('draft', JSON.stringify(allValues));
  // }
})(App);
