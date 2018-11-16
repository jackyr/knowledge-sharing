import React, { Component } from 'react';
import { WingBlank, DrInputItem, DrButton } from '@dr/dr-component-mobile';

class App extends Component {
  state = {
    usr: '',
    pwd: ''
  }
  onUsernameChange = (value) => {
    this.setState({ usr: value });
  }
  onPasswordChange = (value) => {
    this.setState({ pwd: value });
  }
  login = () => {
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
    });
  }
  render() {
    return (
      <WingBlank>
        <DrInputItem title="username" type="text" onChange={this.onUsernameChange} placeholder="username" />
        <DrInputItem title="password" type="password" onChange={this.onPasswordChange} placeholder="password" />
        <DrButton type="primary" onClick={this.login}>login</DrButton>
      </WingBlank>
    );
  }
}

export default App;
