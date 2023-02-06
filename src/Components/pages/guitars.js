import Card from "react-bootstrap/Card";

const Guitarras = () => {
  return (
    <div className="guitar-cards">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Guitarra acustica Fender</Card.Title>
          <Card.Img variant="top" src="../../../public/images/guitar.jpg" />
          <Card.Subtitle className="mb-2 text-muted">
            Precio: $7,000 MXN
          </Card.Subtitle>
          <Card.Text>
            Guitarra acustica marca Fender. Este modelo viene en un solo color y
            sus aditamentos vienen por separado.
          </Card.Text>
          <div className="btn-group">
            <div>
              <button className="btn-compras">Comprar ahora</button>
            </div>
            <hr />
            <div>
              <button className="btn-carrito">Agregar al carrito</button>
            </div>
          </div>
        </Card.Body>
      </Card>
      {/*---------Card 2----------------------*/}
      <Card style={{ width: "15rem", backgroundColor: "black" }}>
        <Card.Body>
          <Card.Title>Guitarra electrica Fender 1802</Card.Title>
          <Card.Img
            variant="top"
            src="https://m.media-amazon.com/images/I/51gRBH-GC3L._AC_SX522_.jpg"
          />
          <Card.Subtitle className="mb-2 text-muted">
            Precio $5,500 MXN
          </Card.Subtitle>
          <Card.Text>
            Esta guitarra Fender cuenta con cuerdas de nylon, cable con
            amplificador y correa negra.
          </Card.Text>
          <div className="btn-group">
            <div>
              <button className="btn-compras">Comprar ahora</button>
            </div>
            <hr />
            <div>
              <button className="btn-carrito">Agregar al carrito</button>
            </div>
          </div>
        </Card.Body>
      </Card>
      {/*---------------Card 3----------------------*/},
      <Card style={{ width: "15rem", backgroundColor: "black" }}>
        <Card.Body>
          <Card.Title>Guitarra electrica Jackson 1707</Card.Title>
          <Card.Img
            variant="top"
            src="https://m.media-amazon.com/images/I/51AoBNN166L._AC_SX522_.jpg"
          />
          <Card.Subtitle className="mb-2 text-muted">
            Precio: $12,000 MXN
          </Card.Subtitle>
          <Card.Text>
            Esta guitarra cuenta con cable, amplificador Marshall 14.61 x 26.04
            x 27.94 cm, correa y cuerdas adicionales.
          </Card.Text>
          <div className="btn-group">
            <div>
              <button className="btn-compras">Comprar ahora</button>
            </div>
            <hr />
            <div>
              <button className="btn-carrito">Agregar al carrito</button>
            </div>
          </div>
        </Card.Body>
      </Card>
      {/*--------------------Card 4--------------------------------*/}
      <Card style={{ width: "15rem", backgroundColor: "black" }}>
        <Card.Body>
          <Card.Title>Epihone 1170</Card.Title>
          <Card.Img
            variant="top"
            src="https://m.media-amazon.com/images/I/51cCjOdbutL.__AC_SX300_SY300_QL70_ML2_.jpg"
          />
          <Card.Subtitle className="mb-2 text-muted">
            Precio: 16,000 MXN
          </Card.Subtitle>
          <Card.Text>
            Esta guitarra cuenta con cable, amplificador Marshall 14.61 x 26.04
            x 27.94 cm, correa,cuerdas adicionales y cabotrasto.
          </Card.Text>
          <div className="btn-group">
            <div>
              <button className="btn-compras">Comprar ahora</button>
            </div>
            <hr />
            <div>
              <button className="btn-carrito">Agregar al carrito</button>
            </div>
          </div>
        </Card.Body>
      </Card>
      {/*---------Card 5----------------------*/}
      <Card style={{ width: "15rem", backgroundColor: "black" }}>
        <Card.Body>
          <Card.Title>Les Paul 1915</Card.Title>
          <Card.Img
            variant="top"
            src="https://m.media-amazon.com/images/I/71pnbjH2P4S._AC_SX522_.jpg"
          />
          <Card.Subtitle className="mb-2 text-muted">
            Precio: 17,500 MXN
          </Card.Subtitle>
          <Card.Text>
          Esta guitarra cuenta con cable, amplificador Marshall 14.61 x 26.04
            x 27.94 cm, correa,cuerdas adicionales y cabotrasto.
          </Card.Text>
          <div className="btn-group">
            <div>
              <button className="btn-compras">Comprar ahora</button>
            </div>
            <hr />
            <div>
              <button className="btn-carrito">Agregar al carrito</button>
            </div>
          </div>
        </Card.Body>
      </Card>
      {/*---------Card 6----------------------*/}
      <Card style={{ width: "15rem", backgroundColor: "black" }}>
        <Card.Body>
          <Card.Title>Les Paul Slash 2024</Card.Title>
          <Card.Img
            variant="top"
            src="https://m.media-amazon.com/images/I/612pBCqa4nL._AC_SY879_.jpg"
          />
          <Card.Subtitle className="mb-2 text-muted">
            Precio 15,000 MXN
          </Card.Subtitle>
          <Card.Text>
          Esta guitarra cuenta con cable, amplificador Marshall 14.61 x 26.04
            x 27.94 cm, correa,cuerdas adicionales y cabotrasto.
          </Card.Text>
          <div className="btn-group">
            <div>
              <button className="btn-compras">Comprar ahora</button>
            </div>
            <hr />
            <div>
              <button className="btn-carrito">Agregar al carrito</button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Guitarras;
