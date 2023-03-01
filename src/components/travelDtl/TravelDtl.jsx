import { useEffect, useState } from "react"
import Servic from "../service/Servic"
import './Traval.css'
import axios from "axios";

const TravelDtl = () => {
    const [data, setData] = useState([])

    const travelData = async () => {
        try {
            const { data } = await axios.get('data.json')
            console.log(data)
            setData(data)
        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        travelData()
    }, [])


    return (
        <>
            <section className="cards-info">
                {data.map((item, index) =>
                    <div className="grid-container" key={index}>
                        <div className="grid-item">
                            <div className="info-wrappers">
                                <span className="offer">{item.offer}</span>
                                <img src={item.url} />
                                <h3>{item.name}</h3>
                                <h4>{item.package}</h4>
                                <h5>Rs-/ {item.price}</h5>
                                <p>
                                    {item.place}
                                </p>
                                <button className="btns">Get Quote</button>
                            </div>
                        </div>
                    </div>
                )}
            </section>
            <Servic />
        </>
    )
}
export default TravelDtl