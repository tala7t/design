import './Design.css';
import image3 from './image/image3.png';
import image4 from './image/image4.png';
export default function About(){
    return(
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-text">
                    <h1>About <span>me</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        Curabitur tempus urna at turpis condimentum lobortis.... <span>Read more</span></p>
                </div>
                <div className="about-image">
                    <img className="image3" src={image3} alt='About me image1'/>
                    <img className="image4" src={image4} alt='About me image3'/>
                </div>
            </div>
        </section>
    );
}