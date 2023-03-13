import { useEffect, useState } from 'react';
import axios from 'axios';

import { Container, Flex } from '../../../core/styled';
import './Traval.css';
const TravelDetails = () => {
  const [data, setData] = useState([]);

  const getPackageList = async () => {
    try {
      const { data } = await axios.get('data.json');
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPackageList();
  }, []);

  return (
    <>
      <section className="cards-info">
        <Container>
          <div className="card-flex">
            <Flex display="flex" flexWrap="wrap" justifyContent="center" gap="10px">
              {data.map((item, index) => (
                <div className="grid-container" key={index}>
                  <div className="grid-item">
                    <div className="info-wrapper">
                      <span className="offer">{item.offer}</span>
                      <img src={item.url} />
                      <span className="offers">{item.day}</span>
                      <h3>{item.name}</h3>
                      <h4>{item.package}</h4>
                      <h5>Rs-/ {item.price}</h5>
                      <p>{item.place}</p>
                      <button className="card-btn">Get Quote</button>
                    </div>
                  </div>
                </div>
              ))}
            </Flex>
          </div>
        </Container>
      </section>
    </>
  );
};
export default TravelDetails;
