import styled from "styled-components";
import { NavLink as LinkRouter } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  padding: 10px;
  background-color: white;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 30px 30px 0 0;
  box-shadow: 0px -5px 10px #d3cdcd;
  z-index: 2;
`;

export const HomeLogoContainer = styled(LinkRouter)`
  & img {
    width: 80%;
  }
`;

export const NavLogosContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const LinkContainer = styled(LinkRouter)`
  & img {
    height: 30px;
    margin: 0 10px 0 10px;
  }
  &.active {
    background-color: #88bd48;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      content: ${(props) => {
        if (props.name === "available")
          return "url('/assets/logos/disponibles-logo-white.svg')";
        if (props.name === "saved")
          return "url('/assets/logos/guardadas-logo-white.svg')";
        if (props.name === "aboutus")
          return "url('/assets/logos/quienes-somos-logo-white.svg')";
        if (props.name === "contact")
          return "url('/assets/logos/contacto-logo-white.svg')";
      }};
    }
  }
`;
