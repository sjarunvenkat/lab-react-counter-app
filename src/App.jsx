import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  incrementHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementHandler = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  resetHandler = () => {
    this.setState({ count: this.state.count * 0 });
  };
  render() {
    return (
      <div className="content">
        <h1>Counter App</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.incrementHandler}>Increment</button>
        <button onClick={this.decrementHandler}>Decrement</button>
        <button onClick={this.resetHandler}>Reset</button>
      </div>
    );
  }
}

export default App;
