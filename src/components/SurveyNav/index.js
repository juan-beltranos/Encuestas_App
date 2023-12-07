import React from "react";
import { Container, ItemContainer, DotButton } from "./styles";

export const SurveyNav = ({ pages, pageNumber }) => {
  return (
    <Container>
      {pages.map((page, idx) => {
        const isOnCurrentPage = pageNumber === idx ? true : false;
        return (
          <ItemContainer key={idx}>
            <DotButton selected={isOnCurrentPage}>
              <div></div>
            </DotButton>
            <span>{page.name}</span>
          </ItemContainer>
        );
      })}
    </Container>
  );
};
