import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeImage = styled.img`
  height: 200px;
  width: auto;
  border-radius: 20px;
  margin-bottom: 20px;
  object-fit: cover;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: black;
  background-color: #ededed;
  padding: 30px 0 30px 0;
  border-radius: 20px;
  width: 100%;
  box-shadow: 0px 5px 10px #d3cdcd, 0px -5px 10px #d3cdcd;
  & div {
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 120px;
    height: 150px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 5px 10px #d3cdcd, 0px -5px 10px #d3cdcd;
    & img {
      width: 60%;
      margin-bottom: 20px;
    }
  }
`;

export const Button = styled(LinkRouter)`
  background-color: #88bd48;
  color: white;
  border: none;
  padding: 5px 15px 5px 15px;
  border-radius: 5px;
  font-size: 10px;
  text-decoration: none;
  text-align: center;
`;
