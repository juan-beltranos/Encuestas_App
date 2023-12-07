import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 30px 20px 30px;
  position: relative;
  & span {
    font-size: 8px;
    color: white;
    width: 50px;
    text-align: center;
    position: absolute;
    bottom: -35px;
    height: 30px;
    display: flex;
    align-items: top;
    justify-content: center;
  }
`;

export const DotButton = styled.div`
  background-color: white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  & div {
    background-color: ${(props) =>
      props.selected === true ? "#88BD48" : "#dadada"};
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
`;
