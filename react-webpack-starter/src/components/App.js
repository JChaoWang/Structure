import React, { Component } from 'react';
import './App.css';
import test from './test.txt';

export default class App extends Component {
  render() {
    console.log(test);
    return <div>my react webpack starter</div>;
  }
}
