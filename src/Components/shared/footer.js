import React from "react";
import styled from "styled-components";

const footer = () => {
  return (
    <>
      <FooterContainer className="main-footer">
        <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/*Column 1*/}
            <div className="col-md-3 col-sm-6">
              <h4>Como encontranos</h4>
              <ul className="list-unstyled">
                <li>C. Juan Aldama, Buenavista, Cuauhtémoc, 06350 Ciudad de México, CDMX </li>
                <hr/>
                <li>Tel:1-800-666</li>

              </ul>
            </div>
            {/*Column 2*/}
            <div className="col-md-3 col-sm-6">
              <h4>Información</h4>
              <ul className="list-unstyled">
                <li><a href='/'>FAQ's</a></li>
                <li><a href=''>Acerca de nosotros</a></li>
                <li><a href=''>Oportunidades de inversiòn</a></li>
                <li><a href=''>Carreras</a></li>
              </ul>
            </div>
            {/*Column 3*/}
            <div className="col-md-3 col-sm-6">
              <h4>Nuestras redes</h4>
              <ul className="list-unstyled">
              <li><a href='/'>Facebook</a></li>
                <li><a href=''>Instagram</a></li>
                <li><a href=''>Youtube</a></li>
                <li><a href=''>LinkedIn</a></li>
              </ul>
            </div>
            {/*Column 4*/}
            <div className="col-md-3 col-sm-6">
              <h4>Compañia</h4>
              <ul className="list-unstyled">
              <li><a href='formulario'>Contactanos</a></li>
                <li><a href=''>Aviso de privacidad</a></li>
                <li><a href=''>Blog</a></li>
                <li><a href=''>Eventos</a></li>

              </ul>
            </div>
          </div>
          {/*Footer bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
            &copy;{new Date().getFullYear()}Bring Me Rock Store-Ucamp Derechos Reservados
            </p>
          </div>
        </div>
        </div>
      </FooterContainer>
    </>
  );
};

export default footer;

const FooterContainer=styled.footer`
.footer-middle{
  background: var(--mainDark);
  padding-top: 3rem;
  color: var(--mainWhite);
}

.footer-bottom{
  padding-top: 3rem;
  padding bottom: 2ren;
}

ul li a{
  color: var(--mainGrey);
}

ul li a:hover{
  color: var(--mainGreen);
}

`;
