import './Design.css';
import { CiHome } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";


export default function FooterPage(){
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="nav-footer">
                    <a href="#home"><CiHome/>Home</a>
                    <a href="#about"><IoPersonOutline/>About me</a>
                    <a href="#contact"><IoCallOutline/>Contact</a>
                </div>
                <div className="social">
                    <a href='#'><SlSocialFacebook/></a>
                    <a href='#'><FaInstagram/></a>
                    <a href='#'><CiTwitter/></a>
                    <a href='#'><CiYoutube/></a>
                </div>
                <div className='footer-bottom'>
                    <span>Terms of Service - Privacy Policy</span>
                </div>
            </div>

        </footer>
    );
}