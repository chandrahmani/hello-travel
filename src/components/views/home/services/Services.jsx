import { Container } from '../../../core/styled';
import './services.css';

const Services = () => {
  return (
    <>
      <section>
        <div className="service-section">
          <Container>
            <div className="heading-detail">
              <h1>Complete Traveling Services</h1>
              <p className="color">
                Integer quis condimentum tellus. Nunc posuere tortor in mauris iaculis pretium. Nunc
                dui nibh, semper in felis sit amet,
              </p>
            </div>

            <div>
              <div className="service-wrap">
                <div className="box">
                  <div className="img-wrp">
                    <img src="https://kashmirtravelagent.com/images/Private_Guest_House.png" />
                  </div>
                  <div className="title-wrap">
                    <a href="#" className="title">
                      Hotels & Houseboats
                    </a>
                    <p>
                      Curabitur tincidunt ullamcorper felis id auctor. Fusce vitae rutrum sem. Proin
                      ex odio,
                    </p>
                  </div>
                </div>

                <div className="box">
                  <div className="img-wrap">
                    <img src="https://kashmirtravelagent.com/images/Sunset_on_Beach.png" />
                  </div>
                  <div className="title-wrap">
                    <a href="#" className="title">
                      Tourist Attraction
                    </a>
                    <p>
                      Gulmarg, Srinagar, Pahalgam or Sonmarg, make a holiday with family, or
                      honeymoon
                    </p>
                  </div>
                </div>

                <div className="box">
                  <div className="img-wrap">
                    <img src="https://kashmirtravelagent.com/images/Restaurant.png" />
                  </div>
                  <div className="title-wrap">
                    <a href=" #" className="title">
                      Local Culinary Recomendation
                    </a>
                    <p>
                      Aliquam vitae tellus suscipit, luctus magna a, vestibulum orci. Nunc eget
                      scelerisque nisl, et sodales
                    </p>
                  </div>
                </div>

                <div className="box">
                  <div className="img-wrap">
                    <img src="https://kashmirtravelagent.com/images/Private_Guest_House.png" />
                  </div>
                  <div className="title-wrap">
                    <a href="#" className="title">
                      Transport & Travel Tips
                    </a>
                    <p>
                      Phasellus at pellentesque odio. Suspendisse vitae dui ut magna varius molestie
                      iaculis a dui.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className="section-tow">
        <Container>
          <div className="section-container">
            <p>
              <span className="trip-detail">About Kashmir</span>
              <br />
              Donec sodales elit vitae diam venenatis ultricies. Aliquam condimentum vestibulum nisl
              a consequat. Integer ullamcorper elit in scelerisque rutrum. Cras ullamcorper mollis
              leo dictum ultricies. Suspendisse tristique nisi elementum tempor mollis. Proin
              faucibus risus sit amet tincidunt rhoncus. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Nunc quis tortor lorem. Nunc
              ornare laoreet est, eget scelerisque nibh tincidunt ut. Phasellus libero enim,
              volutpat non fermentum quis, mattis ac est. Vestibulum a risus eros. Morbi ac accumsan
              orci. Mauris sit a
            </p>

            <div className="imgs">
              <img
                src="https://vaishnodeviyatra.org/wp-content/uploads/2021/05/dal-lake-houseboat.jpg"
                className="imgg"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Services;
