import React from "react";

// ****** With Logical operators ******
// (this.category === "admin" && (this.state.color = "orange")) ||
//   (this.category === "marketing" && (this.state.color = "green"));

// ****** With Ternary operators ******
// this.category === "admin"
//   ? (this.state.color = "orange")
//   : this.category === "marketing"
//   ? (this.state.color = "green")
//   : (this.state.color = this.state.color);

// ****** With Switch Statement ******
// switch (true) {
//   case this.category === "admin":
//     this.state.color = "orange";
//     break;
//   case this.category === "marketing":
//     this.state.color = "green";
//     break;
//   default:
//     break;
// }
class Collapsible extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "default",
      open: false
    };

    this.category = this.props.data.category;

    this.handleClick = this.handleClick.bind(this);

    // ****** With Single Line If Statements ******
    if (this.category === "admin") this.state.color = "admin";
    if (this.category === "marketing") this.state.color = "marketing";
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <li onClick={this.handleClick} className={`collapsible ${this.state.color}`}>
        <div className="title">
          {this.props.data.question}
          <img src="" alt="" className={`arrow ${this.state.open ? "flip" : ""}`} />
        </div>
        <p className={`answer ${this.state.open ? "open" : ""}`}>{this.props.data.answer}</p>
      </li>
    );
  }
}

export default Collapsible;
