import React, { Component } from 'react';
import injectSheet, {ThemeProvider} from 'react-jss';
import { theme, globalStyles } from './App.styles';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p>Normal Text</p>
      </main>
    );
  }
}

export default injectSheet(globalStyles)(App);
