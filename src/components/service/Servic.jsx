import Adventor from '../adventur/Adventur';
import './Service.css'

const Servic = () => {
    return (
        <>
            <section >
                <div className="service-section">
                    <div className="container">
                        <div className="heading-dtl">
                            <h1>Complete Traveling Services</h1>
                            <p className='color'>Plan as you want to. Book your desired hotels & tour packages. Book only what you want. No rigid itineraries. Nowhere else would you find a more flexible plan. </p>
                        </div>

                        <div>
                            <div className='servic-wrp'>
                                <div className='box'>
                                    <div className="img-wrp">
                                        <img src="https://kashmirtravelagent.com/images/Private_Guest_House.png" />
                                    </div>
                                    <div className="title-wrp">
                                        <a href='#' className='titles'>Hotels & Houseboats</a>
                                        <p>Check out the best hotels & Houseboats in Kashmir and enjoy your vacation with your closed ones</p>
                                    </div>
                                </div>

                                <div className='box'>
                                    <div className="img-wrp">
                                        <img src="https://kashmirtravelagent.com/images/Sunset_on_Beach.png" />
                                    </div>
                                    <div className="title-wrp">
                                        <a href='#' className='titles'>Tourist Attraction</a>
                                        <p >Gulmarg, Srinagar, Pahalgam or Sonmarg, make a holiday with family, or honeymoon in Kashmir a wonderful experience.</p>
                                    </div>
                                </div>

                                <div className='box'>
                                    <div className="img-wrp">
                                        <img src="https://kashmirtravelagent.com/images/Restaurant.png" />
                                    </div>
                                    <div className="title-wrp">
                                        <a href=' #' className='titles'>Local Culinary Recomendation</a>
                                        <p >The traditional food of Kashmir is rich in luscious meats, fragrant with rice and redolent of herbs and spices.</p>
                                    </div>
                                </div>

                                <div className='box'>
                                    <div className="img-wrp">
                                        <img src="https://kashmirtravelagent.com/images/Private_Guest_House.png" />
                                    </div>
                                    <div className="title-wrp">
                                        <a href='#' className='titles'>Transport & Travel Tips</a>
                                        <p >Luxury Transport are available for tourists for the purpose of local sightseeing & Travel Guide</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div >
                </div>
            </section >

            <section className='section-tow'>
                <div className='section-conatiner' >

                    <p>
                        <span className='txt'>About Kashmir Tourism</span>< br />

                        "Paradise on the Earth" the state is world famous for its scenic splendour, snow-capped mountains, plentiful wildlife, hospitable people and local handicraft.
                        With apple orchards, saffron fields, glittering lakes & breathtaking meadows, Kashmir, in the union territory of Jammu & Kashmir, draws the attention of tourists from across the globe. With tranquil settings, magnificent views, and pristine nature, Kashmir is a perfect holiday destination that should be visited once in a lifetime.
                        While the beautiful Dal and Nigeen lakes in Srinagar offer an opportunity to relish a stay at the houseboat and enjoy a Shikara Ride; the alpine lakes like Tarsar Marsar, Vishnasar, Gadsar Lakes call out the adventure lovers for the best trekking experience.</p>

                    <div className='imgs'>
                        <img src='https://kashmirtravelagent.com/images/kashmir.png' />
                    </div>
                </div>
                <div className='exp-wrp'>
                    <button className='exp-btn'>Talk To An Expert</button>
                </div>

            </section>

            <Adventor />
        </>
    )
}

export default Servic;