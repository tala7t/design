import './Design.css';
import image3 from './image/image3.png';
import image4 from './image/image4.png';
import { useTranslation } from 'react-i18next';

export default function About(){
const { t } = useTranslation();

    return(
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-text">
                    <h1>{t('aboutMe')} <span>{t()}</span></h1>
                    <p>{t('aboutDescription')} <span>{t('readmore')}</span></p>
                </div>
                <div className="about-image">
                    <img className="image3" src={image3} alt='About me image1'/>
                    <img className="image4" src={image4} alt='About me image3'/>
                </div>
            </div>
        </section>
    );
}