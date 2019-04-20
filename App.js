/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import Calculator from "./calculator";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValid: 0
    };
  }
  render() {
    return <Calculator />;
  }
}
