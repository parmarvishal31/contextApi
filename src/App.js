import logo from './logo.svg';
import './App.css';
import { MyContextProvider } from './context/MyContext';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <MyContextProvider>
        <HomePage />
      </MyContextProvider>

    </>
  );
}

export default App;
