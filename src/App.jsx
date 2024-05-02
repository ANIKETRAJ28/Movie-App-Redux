import './App.css'
import NavBar from './components/NavBar/NavBar';
import MainRoutes from './routes/MainRoutes';

function App() {
  console.log(import.meta.env.VITE_API_KEY);
  return (
    <>
      <NavBar/>
      <MainRoutes/>
    </>
  )
}

export default App
