import './Design.css'
import contact from './image/contact.png';
import { FiSend } from "react-icons/fi";
import { useTranslation } from 'react-i18next';

export default function Contact(){
    const { t } = useTranslation();

    return(
        <div className="contact">
            <div className="contact-container" id="contact">
                <div className="contact-left">
                    <h1>{t("gotProject")} <span>{t("mind")}</span></h1>
                    <div className="image-contact">
                        <img src={contact} alt='imageContact'/>
                    </div>
                </div>
                <div className="contact-right">
                    <form>
                        <div className="row">
                            <div className="field">
                                <label>{t( "yourName")}</label>
                                <input type="text" placeholder={t( "name")}/>
                            </div>
                            <div className="field">
                                <label>{t( "yourEmail")}</label>
                                <input type="email" placeholder={t( "email")}/>
                            </div>
                        </div>

                        <div className="field">
                            <label>{t( "message")}</label>
                            <textarea placeholder={t("message")}></textarea>
                        </div>
                        <button type="submit">
                            {t( "sendMessage")}
                            <FiSend/>
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}