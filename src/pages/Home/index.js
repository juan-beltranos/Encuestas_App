import React, { Fragment } from "react";
import {
  PageContainer,
  SurveysContainer,
  PageTitleContainer,
} from "../../styles/GenericStyles";
import { Container, HomeImage, CardContainer, Button } from "./styles";

export const Home = () => {
  return (
    <Fragment>
      <PageContainer>
        <PageTitleContainer>
          <img
            src="/assets/logos/home-logo.svg"
            alt="logo encuestas disponibles"
          />
          <h1>Inicio</h1>
        </PageTitleContainer>
        <SurveysContainer color="white">
          <Container>
            <HomeImage src="/assets/images/new-home.JPG" />
            <CardContainer>
              <div>
                <img
                  src="/assets/logos/disponibles-logo.svg"
                  alt="logo encuestas disponibles"
                />
                <Button to="/available">ENCUESTAS DISPONIBLES</Button>
              </div>
              <div>
                <img
                  src="/assets/logos/guardadas-logo.svg"
                  alt="logo encuestas guardadas"
                />
                <Button to="/saved">ENCUESTAS GUARDADAS</Button>
              </div>
              <div>
                <img
                  src="/assets/logos/quienes-somos-home.svg"
                  alt="logo quienes somos"
                />
                <Button to="/aboutus">QUIÉNES SOMOS</Button>
              </div>
              <div>
                <img
                  src="/assets/logos/contacto-logo.svg"
                  alt="logo contacto"
                />
                <Button to="/contact">CONTÁCTENOS</Button>
              </div>
            </CardContainer>
          </Container>
        </SurveysContainer>
      </PageContainer>
    </Fragment>
  );
};
