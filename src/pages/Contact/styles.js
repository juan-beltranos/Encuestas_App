import styled from "styled-components";

export const FormContainer = styled.div`
  & form {
    display: flex;
    flex-direction: column;
    & h4 {
      font-weight: 600;
      margin: 3px;
      color: #43525b;
    }
  }
`;

export const CardForm = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border: solid 2px #dadada;
  margin-bottom: 10px;
  border-radius: 5px;
  height: 30px;
  width: 100%;
`;

export const TextArea = styled.textarea`
  border: solid 2px #dadada;
  margin-bottom: 10px;
  border-radius: 5px;
  height: 80px;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  & button {
    display: flex;
    justify-content: center;
    background-color: #88bd48;
    align-items: center;
    min-width: 80px;
    border: none;
    color: white;
    padding: 10px;
    border-radius: 8px;
  }
`;

export const LoaderContainer = styled.div`
  margin-right: 10px;
`;

export const InfoContainer = styled.div`
  padding: 20px;
  & h5 {
    color: #43525b;
    font-weight: 3600;
    margin: 10px;
  }
  & p {
    color: #5091cd;
    font-weight: 3600;
    margin: 10px;
  }
`;
