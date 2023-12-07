import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px;
  margin: 20px 0 20px 0;
  border-radius: 10px;
  opacity: ${(props) => (props.isCompleted === true ? "0.5;" : "1;")} & img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
  }
  & div {
    margin-left: 20px;
  }
  & h1 {
    font-size: 15px;
    margin: 0;
    color: #43525b;
    font-weight: 600;
  }
  & p {
    font-size: 12px;
    margin: 5px 0 5px 0;
    color: #59a1d8;
    font-weight: 600;
  }
`;

export const Button = styled(LinkRouter)`
  background-color: #88bd48;
  color: white;
  border: none;
  padding: 5px 15px 5px 15px;
  border-radius: 5px;
  font-size: 12px;
  text-decoration: none;
`;

export const ButtonDisabled = styled(LinkRouter)`
  background-color: #88bd48;
  color: white;
  border: none;
  padding: 5px 15px 5px 15px;
  border-radius: 5px;
  font-size: 12px;
  text-decoration: none;
`;
