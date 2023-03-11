import { useEffect, useState } from "react"
import './Traval.css'
import axios from "axios";
import Service from "../service/Service";
import { Container } from "../style/Styled";

const TravelDetails = () => {
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
            <section className="">
                <Container>
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="..." className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="..." className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="..." className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </Container>

            </section>
            <Service />
        </>
    )
}
export default TravelDetails;