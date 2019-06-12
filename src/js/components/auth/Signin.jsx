import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";

import * as actions from "../../actions";
// import "../../../styles/form.scss";
import { AUTH_ERROR } from "../../actions/types";

class Signin extends Component {
  onSubmit = formProps => {
    // this.props.setuser();
    this.props.signin(formProps, () => {
      document.getElementById("form").classList.toggle("fading-out");
      setTimeout(() => {
        this.props.history.push("/home");
      }, 350);
    });
  };
  componentDidMount() {
    this.props.resetAuthError();
    document.getElementById("form").classList.toggle("fading-in");
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <main>
        <section id="form" className="form">
          <div className="form-header">Sign Back In</div>

          <form onSubmit={handleSubmit(this.onSubmit)}>
            <fieldset className="email">
              <label htmlFor="email">
                Email
                <Field
                  name="email"
                  autoComplete="off"
                  focus="true"
                  type="text"
                  component="input"
                />
              </label>
            </fieldset>
            <fieldset className="password">
              <label htmlFor="password">
                Password
                <Field
                  name="password"
                  autoComplete="off"
                  type="password"
                  component="input"
                />
              </label>
            </fieldset>
            <div className="error">{this.props.errorMessage}</div>
            <button
              style={{
                backgroundColor: this.props.errorMessage ? "#b21314a0" : "#5aa",
                color: this.props.errorMessage ? "#ede" : "#666"
              }}
              className="btn"
            >
              Sign In
            </button>
          </form>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage
  };
};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "signin" })
)(Signin);
