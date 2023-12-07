import styled from "styled-components";

export const PageContainer = styled.div`
  position: absolute;
  background-color: #59a1d8;
  height: 100%;
  width: 100%;
`;

export const SurveysContainer = styled.div`
  height: 100%;
  background-color: ${({ color = "#ededed" }) => color};
  border-radius: 40px 40px 0 0;
  padding: ${(props) => (props.isSurvey ? "0px" : "20px;")};
  height: auto;
  min-height: calc(80% - 100px);
  padding-bottom: 100px;
`;

export const PageTitleContainer = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  & img {
    width: 40px;
  }
  & h1 {
    margin: 0;
    color: white;
    font-size: 20px;
    font-weight: 300;
    margin-left: 10px;
  }
`;
