import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class ComposedComponent extends Component {
    navigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }
    componentDidMount() {
      this.navigateAway();
    }
    componentDidUpdate() {
      this.navigateAway();
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }
  const mapStateToProps = state => {
    return { auth: state.auth.authenticated };
  };

  return connect(mapStateToProps)(ComposedComponent);
};
