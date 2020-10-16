import React, {Component} from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header : this.props.header
    }
  }
  render() {
    return(
    <header>{this.props.header}</header>
    )
  }
}


export default Header;