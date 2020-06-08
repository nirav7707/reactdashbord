import React, { Component } from "react";
import Header from "./headerComponent";

class Main extends Component {
  render() {
    return (
      <div>
        <div className="container-fluied">
          <div className="row navbarclass">
            <Header />
          </div>
          <div className="row">
            <div className="col-md-3 mainleft">
              <div className="row profile" />
              <div className="row listcomponent" />
            </div>
            <div className="col-md-8 mainright" />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
