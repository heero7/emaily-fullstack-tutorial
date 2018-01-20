import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import Payments from './Payments';

class Header extends Component {
  /**
   * Renders necessary content for user login
   * If the user is not logged in, show log in button
   * If the user is pending login.. show nothing
   * If the user is logged in show something else
   */
  renderLoginContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key={1}><Payments /></li>,
          <li key={2}><a href="/api/logout">Logout</a></li>
        ]
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
           to={this.props.auth ? "/surveys" : "/"}
           className="left brand-logo" >Emaily</Link>
          <ul className="right">{this.renderLoginContent()}</ul>
        </div>
      </nav>
    );
  }
}

// Get state from redux store
function mapStateToProps({ auth }) {
  return { auth };
}

// Setup connect
export default connect(mapStateToProps)(Header);
