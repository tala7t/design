import './Design.css';
import { GoDownload } from "react-icons/go";
import image1 from './image/image1.png';
import image2 from './image/image2.png';
import group from './image/group.png';
import { useTranslation } from 'react-i18next';

export default function Header(){
    const { t } = useTranslation();

    return(
      <div className="container">
        <header className="header-container">
          <h1>{t('brandName')}</h1>
          <ul>
            <li><a href="#home">{t('home')}</a></li>
            <li><a href="#about">{t('aboutMe')}</a></li>
            <li><a href="#contact">{t('contact')}</a></li>
          </ul>
        </header>
        <section className="home">
          <div className="home-contact">
          <h1>{t('creativeUIDesigner')} <span>{t('desiner')}</span></h1>
          <div className="button">
            <a href="#hireme" className="hire-me">{t('hireMe')}</a>
            <a href="#download" download className="download">{t('downloadCV')}<GoDownload /></a>
          </div>
          </div>

          <div className="section-image">
            <img className="image1" src={image1} alt='header1'/>
            <img className="image2" src={image2} alt='header2'/>
          </div>

          <div className='arrow'>
            <img src={group} alt="group"/>
          </div>

        </section>

        </div>
      

    );
}