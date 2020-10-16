import React, {Component} from 'react';
import '../App.css';
import Header from "./Header";

class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      header : this.props.header
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header header = "404 not found"/>
      </React.Fragment>
    );
  }
}

export default Layout;


