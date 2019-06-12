import React from "react";

import Header from "./presentational/layout/Header.jsx";
import Footer from "./presentational/layout/Footer.jsx";

// import "../../styles/appStyles.scss";

const App = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default App;
