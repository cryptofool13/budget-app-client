import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../../../../styles/header.scss";

const Header = props => {
  const renderLinks = () => {
    if (props.authenticated) {
      return (
        <div className="nav">
          <Link to="/home">Home</Link>
          <Link to="/signout">Sign Out</Link>
        </div>
      );
    } else {
      return (
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/signup">Sign up</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      );
    }
  };
  return (
    <header className="header">
      <div className="logo">
        <Link to="/home">J$X</Link>
      </div>
      {renderLinks()}
    </header>
  );
};

const mapStateToProps = state => {
  return { authenticated: state.auth.authenticated };
};

export default connect(mapStateToProps)(Header);
