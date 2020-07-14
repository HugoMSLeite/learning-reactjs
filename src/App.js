import React, { useEffect, useState } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Home from './Pages/Home';
import { ThemeContext, themes } from './Theme';

function App(props) {
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setToken('341h41uhsdflkjqh1')
      setLoading(true)
    }, 5000)
  }, [])

  return (
    <ErrorBoundary>
      <ThemeContext.Provider value={{ ...themes.primary, token }}>
        <Home loading={loading}></Home>
      </ThemeContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
