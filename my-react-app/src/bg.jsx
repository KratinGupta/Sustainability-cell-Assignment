import bgimg from './istockphoto-1310431407-612x612.jpg';
function Backg(){
    return(
        <div className='bgrnd'>
            
            <img className='bgimg' src={bgimg} alt="Background" />
            
        </div>
    )
}
export default Backg;