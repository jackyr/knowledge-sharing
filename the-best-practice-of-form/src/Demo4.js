import React, { Component } from 'react';
import { WingBlank, DrInputItem, DrButton, WhiteSpace } from '@dr/dr-component-mobile';
import { createForm } from 'rc-form';

class App extends Component {
  login = () => {
    const { getFieldsValue } = this.props.form;

    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(getFieldsValue()),
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <WingBlank>
        {
          getFieldDecorator('usr')(
            <DrInputItem title="username" type="text" placeholder="username" />
          )
        }
        {
          getFieldDecorator('pwd')(
            <DrInputItem title="password" type="password" placeholder="password" />
          )
        }
        <WhiteSpace />
        <DrButton type="primary" onClick={this.login}>login</DrButton>
      </WingBlank>
    );
  }
}

export default createForm()(App);
