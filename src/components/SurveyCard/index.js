import React from "react";
import { Container, Button, ButtonDisabled } from "./styles";

export const SurveyCard = ({
  id = "#",
  name = "Formulario",
  isCompleted,
  json,
}) => {
  const defaultPlace = "Colombia";
  const defaultImg = "/assets/images/default-survey.png";

  return (
    <Container isCompleted={isCompleted}>
      <img
        src={json.logo ? (json.logo.es ? json.logo.es : json.logo) : defaultImg}
        alt="imágen del formulario"
      />
      <div>
        <h1>{name}</h1>
        <p>{json.Ubicación ? json.Ubicación : defaultPlace}</p>
        {isCompleted ? (
          <ButtonDisabled to={`/survey/${id}`}>
            VOLVER A COMPLETAR
          </ButtonDisabled>
        ) : (
          <Button to={`/survey/${id}`}>ABRIR FORMULARIO</Button>
        )}
      </div>
    </Container>
  );
};
