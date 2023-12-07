import React from "react";
import {
  Container,
  HomeLogoContainer,
  NavLogosContainer,
  LinkContainer,
} from "./styles";

export const NavBar = () => {
  return (
    <Container>
      <HomeLogoContainer to="/home">
        <img
          src="/assets/logos/federacion-logo.svg"
          alt="logo federación luterana"
        />
      </HomeLogoContainer>
      <NavLogosContainer>
        <LinkContainer to="/available" name="available">
          <img
            src="/assets/logos/disponibles-logo.svg"
            alt="logo encuestas disponibles"
          />
        </LinkContainer>
        <LinkContainer to="/saved" name="saved">
          <img
            src="/assets/logos/guardadas-logo.svg"
            alt="logo encuestas guardadas"
          />
        </LinkContainer>
        <LinkContainer to="/aboutus" name="aboutus">
          <img
            src="/assets/logos/quienes-somos-logo.svg"
            alt="logo quienes somos"
          />
        </LinkContainer>
        <LinkContainer to="/contact" name="contact">
          <img src="/assets/logos/contacto-logo.svg" alt="logo contacto" />
        </LinkContainer>
      </NavLogosContainer>
    </Container>
  );
};
