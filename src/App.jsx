import './App.css'
import NavBar from './components/NavBar/NavBar';
import MainRoutes from './routes/MainRoutes';
import ThemeContext from './context/ThemeContext';
import { useEffect, useState } from 'react';

function App() {

  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const userTheme = localStorage.getItem('app-theme');
    if(userTheme != null) setTheme(userTheme);
  }, [])

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
