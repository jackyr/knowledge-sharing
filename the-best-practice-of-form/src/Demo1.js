import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <form action="/login" method="post">
          username: <input type="text" name="usr" />
          password: <input type="password" name="pwd" />
          <input type="submit" value="login" />
        </form>
      </div>
    );
  }
}

export default App;
