import React from "react";

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    console.log(this.state.open);
    this.handleClick = this.handleClick.bind(this);
    this.color = () => {
      let colorString = "";
      switch (true) {
        case this.props.data.category === "admin":
          colorString = "orange";
          break;

        case this.props.data.category === "marketing":
          colorString = "green";
          break;

        default:
          colorString = "gray";
          break;
      }
      return colorString;
    };
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <li onClick={this.handleClick} className={this.color()}>
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
