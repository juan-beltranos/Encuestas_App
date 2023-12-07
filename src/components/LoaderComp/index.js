import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 30%;
`;

export const LoaderComp = ({ color = "#00BFFF", type="Grid"}) => {
  return (
    <Container>
      <Loader type={type} color={color} height={50} width={50} />
    </Container>
  );
};
