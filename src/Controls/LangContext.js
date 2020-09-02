import React from 'react'

const LangContext = React.createContext({
  lang: window.navigator.language
})

export default LangContext