import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Carusel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_VDaOGAjMmOfTrP-QfvNL_iBXtrCoi6zCA&usqp=CAU"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Eventos especiales</h3>
            <p>Ven a disfrutar de nuestros conciertos y demàs eventos.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="data:image/jpeg;base64,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"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Nuevo material</h3>
            <p>Con tu subscripciòn accede antes a nuevos instrumentos.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFLEGB4VoGDa9LmxAJn3oY1qFGNehAawYwLA&usqp=CAUa"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Merch</h3>
            <p>
              Material exclusivo de la tienda.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carusel;
