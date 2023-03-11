import { Container } from '../../../core/styled';
import './Adventure.css';

const Adventure = () => {
  return (
    <section className="adventure-section">
      <div className="adventure-container">
        <Container>
          <div className="img-trip">
            <img src="https://static.toiimg.com/photo/81849907.cms" />

            <div className="adventure-detail">
              <p>
                Travel Agent Kashmir announced trip to Heaven on earth Kashmir, It would Enjoy best
                of sceneries in Fairy Meadows and make your journey a beautiful memory with us ❤️ We
                wish you all the best and look forward to seeing you joining this Thrilling and
                Adventurous Tour.
              </p>

              <a href="#" className="link">
                Talk To An Expert
              </a>
            </div>
          </div>

          <div className="adventure-package">
            <div>
              <h6 className="title mb-0">Day 1: Arrive Srinagar </h6>
            </div>

            <div>
              <div>
                <p>
                  Welcome to your Glorious Kashmir tour! Arrive into Airport in Srinagar. You will
                  be met and transferred to your houseboat in Srinagar. When we think of Kashmir,
                  the first thing that comes to our Mind is &lsquo;Houseboats&lsquo;. Staying on a
                  Houseboat means like living in Paradise, an experience one is not likely to find
                  anywhere else on the surface of the earth. In the evening, enjoy a romantic
                  Shikara ride for one hour on the Dal lake. Overnight in Houseboat.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Adventure;
