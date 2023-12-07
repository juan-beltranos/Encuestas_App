import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #59a1d8;
  & img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;

export const Splash = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(function () {
      history.push("/home");
    }, 2000);
  }, []);

  return (
    <Container>
      <img src="/assets/images/splash-raw.png" alt="splash" />
    </Container>
  );
};
