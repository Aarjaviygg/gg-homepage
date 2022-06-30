import './AboutUs.css';
import logo from "../../assets/logo.jpeg"

const aboutUs = () => {
    return ( 
        <div>
            <img src={logo} alt='' className='banner'/>
            <div className='about'>
            <h1 className="header">Guzelgiy</h1>
            <p className='details'>Our main motive is to connect to influencers from various sections and help
                them promote their ideology. We help them market their own brand along with
                increasing the awareness of social causes to different communities.
            </p>
            </div>
        </div>
     );
}
 
export default aboutUs;