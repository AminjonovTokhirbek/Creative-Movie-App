import React, { Component } from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
