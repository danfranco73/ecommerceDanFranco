import { Component } from "react";
class ClassComponent extends Component {

  constructor() {
    
    super();
    this.state = {
      initialState: 0,
    };
  }

  suma = () => {
    this.setState({
      initialState: this.state.initialState + 1,
    });
  };
  resta = () => {
    this.setState({
      initialState: this.state.initialState - 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.resta}>-</button>
        <h3>{this.state.initialState}</h3>
        <button onClick={this.suma}>+</button>
      </div>
    );
  }
}

export default ClassComponent;
