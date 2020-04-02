import React from "react";

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      open: false
    };

    this.handleClick = this.handleClick.bind(this);

    switch (true) {
      case this.props.data.category === "admin":
        this.state.color = "orange";
        break;
      case this.props.data.category === "marketing":
        this.state.color = "green";
        break;
      default:
        this.state.color = "gray";
        break;
    }
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <li onClick={this.handleClick} className={this.state.color}>
        <button>
          {this.props.data.question}
          <img src="" alt="" className={this.state.open ? "turn-up" : ""} />
        </button>
        <p className={this.state.open ? "open" : ""}>{this.props.data.answer}</p>
      </li>
    );
  }
}

export default Collapsible;
