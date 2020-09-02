import React from 'react';
import LangContext from './LangContext';

const LangControls = ({ onSetLang }) => {
  return (
    <LangContext.Consumer>
      {value => {
        console.log(value);
        return (
          <>
            <button
              onClick={() => onSetLang('en-GB')}
              disabled={value.lang === 'en-GB'}
            >
              British{' '}
              <span role="img" aria-label="en-GB">
                🇬🇧
              </span>
            </button>{' '}
            <button
              onClick={() => onSetLang('en-US')}
              disabled={value.lang === 'en-US'}
            >
              American{' '}
              <span role="img" aria-label="en-US">
                🇺🇸
              </span>
            </button>{' '}
            <button
              onClick={() => onSetLang('ko')}
              disabled={value.lang === 'ko'}
            >
              Korean{' '}
              <span role="img" aria-label="ko">
                🇰🇷
              </span>
            </button>
          </>
        );
      }}
    </LangContext.Consumer>
  );
};

export default LangControls;
