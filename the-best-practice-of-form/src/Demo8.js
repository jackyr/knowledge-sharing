import React, { Component } from 'react';
import { WingBlank } from '@dr/dr-component-mobile';

class Checkbox extends Component {
  state = {
    checked: this.props.value,
  }
  componentDidMount() {
    console.log(this.props);
  }
  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        checked: !!nextProps.value,
      });
    }
  }
  onClick = (e) => {
    this.setState({
      checked: 'value' in this.props ? this.props.value : !this.state.checked,
    });
    this.props.onChange && this.props.onChange(!this.state.checked);
  }
  render() {
    return (<div
      onClick={this.onClick}
      style={{
        display: 'inline-block',
        width: 20,
        height: 20,
        border: '1px solid #333',
        background: this.state.checked ? '#333' : '#fff',
      }}
    />);
  }
}

class App extends Component {
  render() {
    return (
      <WingBlank>
        True/False:
        <Checkbox value={true} />
      </WingBlank>
    );
  }
}

export default App;
