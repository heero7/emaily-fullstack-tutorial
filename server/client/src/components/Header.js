import React, { Component } from "react";
import { connect } from "react-redux";

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
        return "S";
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return <li><a href="/api/logout">Logout</a></li>;
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Emaily</a>
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
