import React, { Component } from 'react';
import Child from './children/Child';
import LangControls from './Controls/LangControls';
import LangContext from './Controls/LangContext';

export default class AppLang extends Component {
  state = {
    lang: window.navigator.language
  };

  handleSetLang = lang => {
    this.setState({ lang });
  };

  render() {
    const contextValue = {
      lang: this.state.lang
    };

    return (
      <LangContext.Provider value={contextValue}>
        <div className="AppLang">
          <LangControls onSetLang={this.handleSetLang}/>
          <Child />
        </div>
      </LangContext.Provider>
    );
  }
}
