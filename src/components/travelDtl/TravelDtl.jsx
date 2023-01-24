import { useEffect, useState } from "react"

import Servic from "../service/Servic"
import './Traval.css'

const TravelDtl = () => {
    const [data, setData] = useState([])

    const travelData = () => {

    }

    useEffect(() => {

    }, [])
    return (
        <>
            <section className="cards-info">
                <div className="grid-container">
                    <div className="grid-item"> <span className="offer">70% off </span>
                        <img src="https://kashmirtravelagent.com/images/travel/1.jpg" /><span className="tag">4N/5D</span>
                        <div className="info-wrappers">
                            <h3>Kashmir Houseboat Tour</h3>
                            <h4>Package Starting:Srinagar | Gulmarg |</h4>
                            <h5>Sonmarg | Pahalgam</h5>
                            <p>RS. 8,999/-</p>
                            <button className="btns">Get Quote</button>
                        </div>
                    </div>

                    <div className="grid-item"> <span className="offer">50% off</span>
                        <img src="https://kashmirtravelagent.com/images/travel/2.jpg" /><span className="tag">4N/5D</span>
                        <div className="info-wrappers">
                            <h3>Kashmir Houseboat Tour</h3>
                            <h4>Package Starting:Srinagar | Gulmarg |</h4>
                            <h5>Sonmarg | Pahalgam</h5>
                            <p>RS. 8,999/-</p>
                            <button className="btns">Get Quote</button>
                        </div>
                    </div>

                    <div class="grid-item"> <span className="offer">80% off</span>
                        <img src="https://kashmirtravelagent.com/images/travel/9.jpg" /><span className="tag">4N/5D</span>
                        <div className="info-wrappers">
                            <h3>Kashmir Houseboat Tour</h3>
                            <h4>Package Starting:Srinagar | Gulmarg |</h4>
                            <h5>Sonmarg | Pahalgam</h5>
                            <p>RS. 8,999/-</p>
                            <button className="btns">Get Quote</button>
                        </div>
                    </div>

                    <div class="grid-item"> <span className="offer">40% off</span>
                        <img src="https://kashmirtravelagent.com/images/travel/5.jpg" /><span className="tag">4N/5D</span>
                        <div className="info-wrappers">
                            <h3>Kashmir Houseboat Tour</h3>
                            <h4>Package Starting:Srinagar | Gulmarg |</h4>
                            <h5>Sonmarg | Pahalgam</h5>
                            <p>RS. 8,999/-</p>
                            <button className="btns">Get Quote</button>
                        </div>
                    </div>

                    <div class="grid-item"> <span className="offer">70% off</span>
                        <img src="https://kashmirtravelagent.com/images/travel/4.jpg" /><span className="tag">4N/5D</span>
                        <div className="info-wrappers">
                            <h3>Kashmir Houseboat Tour</h3>
                            <h4>Package Starting:Srinagar | Gulmarg |</h4>
                            <h5>Sonmarg | Pahalgam</h5>
                            <p>RS. 8,999/-</p>
                            <button className="btns">Get Quote</button>
                        </div>
                    </div>

                    <div class="grid-item"> <span className="offer">70% off</span>
                        <img src="https://kashmirtravelagent.com/images/travel/5.jpg" /><span className="tag">4N/5D</span>
                        <div className="info-wrappers">
                            <h3>Kashmir Houseboat Tour</h3>
                            <h4>Package Starting:Srinagar | Gulmarg |</h4>
                            <h5>Sonmarg | Pahalgam</h5>
                            <p>RS. 8,999/-</p>
                            <button className="btns">Get Quote</button>
                        </div>
                    </div>
                </div>

            </section>

            <Servic />
        </>
    )
}

export default TravelDtl