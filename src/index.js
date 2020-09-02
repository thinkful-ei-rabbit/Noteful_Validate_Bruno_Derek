import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import { BrowserRouter } from 'react-router-dom';
import AppLang from './AppLang';

ReactDOM.render(
  <BrowserRouter>
    <AppLang />
  </BrowserRouter>,
  document.getElementById('root')
);