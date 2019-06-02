import React, { Component } from 'react';
import Header from './component/header';
import './app.scss';
import Headline from './component/headline/index.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" />
        </section>
      </div>
    );
  }
}
