import './App.css'
import NavBar from './components/NavBar/NavBar';
import MainRoutes from './routes/MainRoutes';
import ThemeContext from './context/ThemeContext';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState('dark');

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div id='app-wrapper' data-theme={theme}>
          <NavBar/>
          <MainRoutes/>
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
