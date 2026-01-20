import logo from './logo.svg';
import './App.css';
import Header from './Creative-design/Header';
import About from './Creative-design/About';
import Work from './Creative-design/Work';
import Contact from './Creative-design/Contact';
import FooterPage from './Creative-design/FooterPage';
function App() {
  return (
    <div className="App">

      <Header/>
      <About/>
      <Work/>
      <Contact/>
      <FooterPage/>
    </div>
  );
}

export default App;
