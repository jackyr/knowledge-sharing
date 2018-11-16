import React, { Component } from 'react';

class App extends Component {
  state = {
    usr: '',
    pwd: ''
  }
  onUsernameChange = (e) => {
    const value = e.target.value;
    this.setState({ usr: value });
  }
  onPasswordChange = (e) => {
    const value = e.target.value;
    this.setState({ pwd: value });
  }
  login = (e) => {
    e.preventDefault();

    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
    });
  }
  render() {
    return (
      <div>
        <form>
          username: <input type="text" onChange={this.onUsernameChange} />
          password: <input type="password" onChange={this.onPasswordChange} />
          <input type="submit" value="login" onClick={this.login} />
        </form>
      </div>
    );
  }
}

export default App;
