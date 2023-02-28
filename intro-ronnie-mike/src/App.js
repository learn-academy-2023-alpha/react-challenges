import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Favorites from './components/Favorites';


const App = () => {
  return (
    <>
    <Header />
    <Profile />
    <Favorites />
    <Footer/>
    </>
  )
}

export default App;