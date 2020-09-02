import React, { Component } from 'react';
import LangSpecificCopy from '../Controls/LangSpecificCopy';
import LangContext from '../Controls/LangContext';

class GreatGrandChild extends Component {
  static contextType = LangContext;

  render() {
    const copy = LangSpecificCopy[this.context.lang] || {};
    return (
      <section>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
      </section>
    );
  }
}

export default GreatGrandChild;
