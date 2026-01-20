import './Design.css';
import image4 from './image/image4.png';
import work1 from './image/work1.png';
import work2 from './image/work2.png';
import work3 from './image/work3.png';
export default function Work(){
    return(
        <section className="work-section">
            <img className="work-bg" src={image4}/>
            <div className="work-container">
                <div className="work-text">
                    <h1>My recent <span>works</span></h1>
                    <ul>
                        <li className="active">All</li>
                        <li>UI</li>
                        <li>UX</li>
                        <li>Web Design</li>
                    </ul>
                </div>
                <div className="work-image">
                    <div className="work-card">
                    <img className="work-item" src={work1} alt='image work1'/>
                    </div>
                     <div className="work-card">
                    <img className="work-item" src={work2} alt="image work2"/>
                    </div>
                     <div className="work-card">
                    <img className="work-item" src={work3} alt="image work3"/>
                    </div>
                </div>
            </div>
        </section>
    );
}