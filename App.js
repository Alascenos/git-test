import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';



const App = () => { // App - функция, которая возвращает HTML код
  return (
  <div className = "app-wrapper">
    <Header />
    <Navbar />
  </div>
  );
}

export default App;