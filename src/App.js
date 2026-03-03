import './App.css';
import Header from './Creative-design/Header';
import About from './Creative-design/About';
import Work from './Creative-design/Work';
import Contact from './Creative-design/Contact';
import FooterPage from './Creative-design/FooterPage';
import './Creative-design/Design.css';
import { FaRegMoon } from "react-icons/fa6";


import { useTranslation } from 'react-i18next';
import './Transitions'
function App() {

  const { i18n} = useTranslation();
  const handleChangeLanguage = (e) =>{
    const language = e.target.value;
     i18n.changeLanguage(language);
    document.body.dir = language === "arabic" ? 'rtl' : 'ltr';
  }

  const DarkMode = () =>{
    document.body.classList.toggle('dark-mode');
  }
  return (
    <div className="App">

<div>
        <button className='darkMode' onClick={DarkMode}><FaRegMoon/></button>

      <div className='selectLanguage'>
<select onChange={handleChangeLanguage} defaultValue={i18n.language}>
  <option value="en">English</option>
  <option value="ar">العربية</option>
  <option value="de">German</option>
  <option value="it">Italian</option>
  <option value="es">Spanish</option>
</select>
      </div>
</div>

      <Header/>
      <About/>
      <Work/>
      <Contact/>
      <FooterPage/>
    </div>
  );
}

export default App;
