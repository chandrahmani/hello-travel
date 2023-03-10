import { useState } from 'react';
import { Container } from '../header/Styled';
import './Advent.css'

const Adventur = () => {

    return (
        <>
            <section className="advent-section">
                <div className="advent-container">
                    <Container>
                        <div className="img-trip">
                            <img src="https://static.toiimg.com/photo/81849907.cms" />

                            <div className="advent-dtl">
                                <p>Travel Agent Kashmir announced trip to Heaven on earth Kashmir, It would
                                    Enjoy best of sceneries in Fairy Meadows and make your journey a beautiful memory with us ❤️
                                    We wish you all the best and look forward to seeing you joining this Thrilling and Adventurous Tour.</p>

                                <a href="#" className='anchor'>Talk To An Expert</a>
                            </div>
                        </div>

                        <div className='text-wrp'>
                            <div>
                                <h6 className="title mb-0">Day 1: Arrive Srinagar </h6>
                            </div>

                            <div >
                                <div >
                                    <p c>Welcome to your 'Glorious Kashmir' tour! Arrive into Airport in Srinagar. You will be met and transferred to your houseboat in Srinagar. When we think of Kashmir, the first thing that comes to our Mind is 'Houseboats'. Staying on a Houseboat means like living in Paradise, an experience one is not likely to find anywhere else on the surface of the earth. In the evening, enjoy a romantic Shikara ride for one hour on the Dal lake. Overnight in Houseboat.</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
            <footer>
                <Container>
                    <h1 className='txts'>ustomize Your Holiday Package With Our Travel Experts</h1>
                    <div className='link-wrp'>
                        <div className='link-container'>
                            <div className='web-link'>
                                <a href='https://www.webtechpie.com/'>webtechpie.com</a>
                            </div>
                        </div>
                        <div className='num-wrp'>
                            <a href='#' ht className='num'>
                                Mob: +917006036459 / +91990675515
                            </a>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Adventur;