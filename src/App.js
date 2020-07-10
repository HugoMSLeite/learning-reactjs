import React, { useEffect, useState } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Card from './Card';
import { ThemeContext, themes } from './Theme'

function TesteError(props) {
  useEffect(() => {

  }, [])
  //Essa linha força o erro
  //let forceError = props.error.error
  return <h1>Sistema rodando</h1>
}

function App(props) {
  const [token, setToken] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setToken('341h41uhsdflkjqh1')
    }, 4000)
  }, [])

  return (
    <ErrorBoundary>
      <TesteError></TesteError>
      <ThemeContext.Provider value={{ ...themes.primary, token }}>
        <Card></Card>
      </ThemeContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
