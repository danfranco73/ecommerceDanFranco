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

  render() {
    return (
      <div>
        <h3>{this.state.initialState}</h3>
        <button onClick={this.suma}>Agregar</button>
      </div>
    );
  }
}

export default ClassComponent;
