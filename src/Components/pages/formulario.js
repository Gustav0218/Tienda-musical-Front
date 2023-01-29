import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Formulario = () => {
    return (
      <Form >
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre completo</Form.Label>
        <Form.Control
          name="nameForm"
          type="text"
          placeholder="Bruce Ejemplo Wayne"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Group className="mb-3" controlId="FormBasicMail">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            
            name="emailForm"
            type="mail"
            placeholder="ejemplo@gmail.com"
          />
        </Form.Group>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicComents">
        <Form.Label>Dejanos saber...</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          name="emailComents"
          placeholder="Escribenos en que te podemos ayudar...max200 caracteres "
          rows={3}
        />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    );
  };
  
  export default Formulario;