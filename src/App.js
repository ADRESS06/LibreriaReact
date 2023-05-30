import './assets/css/Main.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Home from './layouts/Home';


function App() {
  return (
    <div className='app'>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
