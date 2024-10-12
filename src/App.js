import './App.css';
import React, { useState } from 'react';
import { ThemContext } from './ThemContext';
import Page from "./Page"


function App() {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : "dark"))
  }
  return (
    <div className="App">
        <ThemContext.Provider value={{theme, toggleTheme}}>
          <Page />
        </ThemContext.Provider>
    </div>
  );
}

export default App;
