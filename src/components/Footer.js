import React, {Component} from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footer : this.props.footer
    }
  }
  render() {
    return(
    <footer>{this.props.header}</footer>
    )
  }
}


export default Footer;