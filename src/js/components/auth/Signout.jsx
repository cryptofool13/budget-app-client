import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../actions";

class Signout extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    document.getElementById("btn").classList.toggle("fading-out");
    setTimeout(() => {
      this.props.history.push("/signin");
    }, 350);
  }

  componentDidMount() {
    this.props.signout();
  }
  render() {
    return (
      <main>
        <section className="farewell">
          <div>
            <div>
              <h3>See you next time!</h3>
            </div>
            <div className="flex-container">
              <div>
                <p className="text">
                  Save money and build better spending habits with J$X!
                </p>
              </div>
              <div className="center">
                <button onClick={this.handleClick} id="btn" className="btn">
                  Sign in
                </button>
              </div>
              <div>
                <p className="text">
                  Visualize finance with integrated charts and cutting edge data
                  extraction!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default connect(
  null,
  actions
)(Signout);
