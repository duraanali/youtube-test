import React from "react";

class Hello extends React.Component {
constructor() {
    super();
    this.state = {
        message: "Hi from State"
    }
    this.updateMessage = this.updateMessage.bind(this);
}

updateMessage() {
    this.setState({
        message: "Hi, from changed state"
    })
}

  render() {
  return (
    <div>
      <div>{this.state.message}</div>
      <button onClick={this.updateMessage}>Change message</button>
    </div>
  );
  }

}

export default Hello;