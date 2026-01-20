import './Design.css'
import contact from './image/contact.png';
import { FiSend } from "react-icons/fi";
export default function Contact(){
    return(
        <div className="contact">
            <div className="contact-container" id="contact">
                <div className="contact-left">
                    <h1>Got a project in <span>mind?</span></h1>
                    <div className="image-contact">
                        <img src={contact} alt='imageContact'/>
                    </div>
                </div>
                <div className="contact-right">
                    <form>
                        <div className="row">
                            <div className="field">
                                <label>Your Name</label>
                                <input type="text" placeholder="Name"/>
                            </div>
                            <div className="field">
                                <label>Your Email</label>
                                <input type="email" placeholder="Email"/>
                            </div>
                        </div>

                        <div className="field">
                            <label>Message</label>
                            <textarea placeholder="Message"></textarea>
                        </div>
                        <button type="submit">
                            Send Message
                            <FiSend/>
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}