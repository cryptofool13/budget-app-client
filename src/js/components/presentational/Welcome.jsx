import React from "react";
import { Link } from "react-router-dom";

// import "../../../styles/welcome.scss";

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    document.getElementById("wrapper").classList.toggle("fading-in");
  }
  handleClick() {
    const wrapper = document
      .getElementById("wrapper")
      .classList.toggle("fading-out");
    setTimeout(() => {
      this.props.history.push("/signin");
    }, 350);
  }
  render() {
    return (
      <main className="main">
        <div id="wrapper">
          <h2>Welcome to J $ X</h2>
          <p>A balance tracking app</p>
          <button onClick={this.handleClick} className="welcome-signin">
            Sign In
          </button>
        </div>
      </main>
    );
  }
}

export default Welcome;
