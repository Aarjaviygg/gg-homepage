import './InfluencersDetails.css';

const InfluencersDetails = () => {
    return ( 
        <>
        <div className='influencercard'>
        <img className='influencerImage' src={require('../../assets/influencer1.png')} alt="influencer"/>
        <div className='aboutinf'>
            <h1 className="name">Katy Perry</h1>
            <span className="aboutInfluencer">
                Pair text with an image to focus on your chosen product,
                collection, or blog post. Add details on availability, 
                style, or even provide a review.
            </span>
            <button className="viewStore">View Page</button>
        </div>
        </div>

        <div className='influencercard'>
        <img src={require('../../assets/influencer2.png')} alt="influencer"/>
        <div className='aboutinf'>
            <h1 className="name">Madonna</h1>
            <span className="aboutInfluencer">
                Pair text with an image to focus on your chosen product,
                collection, or blog post. Add details on availability, 
                style, or even provide a review.
            </span>
            <button className="viewStore">View Page</button>
        </div>
        </div>
        </>
     );
}
 
export default InfluencersDetails;