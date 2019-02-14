import React, { Component } from 'react';
import injectSheet, {ThemeProvider} from 'react-jss';
import { theme, globalStyles } from './App.styles';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <h1>Heading 1</h1>
        <h2>Heading 1</h2>
        <h3>Heading 1</h3>
        <p>Heading 1</p>
      </main>
    );
  }
}

export default App;
