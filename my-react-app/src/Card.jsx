import Sustainablity from './sustainability-earth-hand-care-logo-icons-vector.jpg'
import bgimg from './istockphoto-1310431407-612x612.jpg';

function Card(){
    return(
        <div className="Card"
            style={{
                backgroundImage: `url(${bgimg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
            <div className="overlay"></div>
            <div style={{ position: 'relative', zIndex: 1, }}>
                <img className="card-image" src={Sustainablity} alt="My pfp" />
                <h2>Sustainability Cell Orientation </h2>
                <div className='card-description'>
                    <p>Join us for the Sustainability Cell Orientation to learn about our mission, upcoming events, and how you can get involved in making a positive impact on the environment.</p>
                </div>
                <div className='card-title'>
                    DATE: 20th October 2025<br/>
                    TIME: 8:00 PM - 9:00 PM<br/>
                    VENUE: LTPCSA<br/>
                </div>
                <button className='register'>REGISTER</button>
            </div>
        </div>
    )
}
export default Card;