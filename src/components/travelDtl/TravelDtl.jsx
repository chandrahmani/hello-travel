import { useState } from "react"
import { travelData } from "../../data"
import './Traval.css'

const TravelDtl = () => {
    const [data, setData] = useState(travelData)
    return (
        <>
            <section className="cards-info">
                <div class="grid-container">
                    <div class="grid-item"> <span className="offer">70% off</span>
                        <img src="https://kashmirtravelagent.com/images/travel/1.jpg" /></div>
                    <div class="grid-item"> <span className="offer">70% off</span>
                        <img src="https://kashmirtravelagent.com/images/travel/1.jpg" /></div>
                    <div class="grid-item"> <span className="offer">70% off</span>
                        <img src="https://kashmirtravelagent.com/images/travel/1.jpg" /></div>
                    <div class="grid-item"> <span className="offer">70% off</span>
                        <img src="https://kashmirtravelagent.com/images/travel/1.jpg" /></div>
                    <div class="grid-item"> <span className="offer">70% off</span>
                        <img src="https://kashmirtravelagent.com/images/travel/1.jpg" /></div>
                    <div class="grid-item"> <span className="offer">70% off</span>
                        <img src="https://kashmirtravelagent.com/images/travel/1.jpg" /></div>
                </div>

            </section>
        </>
    )
}

export default TravelDtl