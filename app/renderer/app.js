import React from "react";
import test from "./test";
import "./style.css";

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.PureComponent {
  render() {
    console.log("res is ",test);
    return (
      <div>
        <h1>Hello!</h1>
      </div>
    );
  }

}
