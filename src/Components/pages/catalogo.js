import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Catalogo = () => {
  return (
    <>
      <div className="catalog-card">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="data:image/jpeg;base64,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"
          />
          <Card.Body style={{ color: "black" }}>
            <Card.Title>Pianos</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        {/*--------Card 2----------*/}
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.taylorguitars.com/sites/default/files/styles/feature_half/public/images/2022-10/Taylor-Academy-10-Academy-12N-Academy-12e.jpg?h=80557b9b&itok=Q6mTMuVx"
          />
          <Card.Body style={{ color: "black" }}>
            <Card.Title>Guitarras</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>

            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>

            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        {/*------Card 3---------*/}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://m.media-amazon.com/images/I/41IIRDCFjfL._AC_SX425_.jpg" />
          <Card.Body style={{ color: "black" }}>
            <Card.Title>Flautas</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        {/*-------Card 4---------- */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/54e22edbe4b0f4c3cc05b2c0/1622846411526-D6XCMMZHK6ME6WBI0YXO/Guitar_Pedalboard_01_small.jpg" />
          <Card.Body style={{ color: "black" }}>
            <Card.Title>Componentes</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Catalogo;
