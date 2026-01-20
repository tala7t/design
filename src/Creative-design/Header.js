import './Design.css';
import { GoDownload } from "react-icons/go";
import image1 from './image/image1.png';
import image2 from './image/image2.png';
export default function Header(){
    return(
      <div className="container">
        <header className="header-container">
          <h1>SaulDesign</h1>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </header>
        <section className="home">
          <div className="home-contact">
          <h1>CREATIVE UI <span>DESIGNER</span></h1>
          <div className="button">
            <a href="#hireme" className="hire-me">Hire Me</a>
            <a href="#download" download className="download">Download CV <GoDownload /></a>
          </div>
          </div>

          <div className="section-image">
            <img className="image1" src={image1} alt='header1'/>
            <img className="image2" src={image2} alt='header2'/>
          </div>

        </section>

        </div>
      

    );
}