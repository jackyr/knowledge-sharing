import React, { Component } from 'react';
import { WingBlank, DrButton, WhiteSpace } from '@dr/dr-component-mobile';
import { createForm } from 'rc-form';

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
      checked: !this.state.checked,
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
  componentDidMount() {
    const { setFieldsValue } = this.props.form;

    setTimeout(() => {
      setFieldsValue({
        'answer': false,
      });
    }, 1000);
  }
  submit = () => {
    const { getFieldsValue } = this.props.form;

    console.log(getFieldsValue());
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <WingBlank>
        True/False:
        {
          getFieldDecorator('answer', {
            initialValue: true,
          })(
            <Checkbox />
          )
        }
        <WhiteSpace />
        <DrButton type="primary" onClick={this.submit}>submit</DrButton>
      </WingBlank>
    );
  }
}

export default createForm()(App);
