import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & img {
    height: 100px;
    width: auto;
    min-width: 100px;
    border-radius: 10px;
    margin-right: 10px;
    max-width: 45vw;
    object-fit: cover;
  }
  & h2 {
    color: white;
    font-size: 13px;
    font-weight: 600;
  }
`;

export const StepsContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  & img {
    height: 40px;
    width: auto;
  }
`;

export const Loader = styled.p`
  padding: 10px;
  color: white;
`;
