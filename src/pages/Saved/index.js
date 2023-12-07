import React, { Fragment, useEffect, useState } from "react";
import {
  PageContainer,
  SurveysContainer,
  PageTitleContainer,
} from "../../styles/GenericStyles";
// components
import { SurveyCard } from "../../components/SurveyCard";
import { NavBar } from "../../components/NavBar";
// database
import { useStorageSQLite } from "react-data-storage-sqlite-hook/dist";
import styled from "styled-components";

export const CompletedTitle = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: gray;
  font-size: 16px;
  text-align: center;
  & img {
    margin-top: 30px;
    max-width: 200px;
  }
`;

export const Saved = () => {
  const { openStore, getAllValues } = useStorageSQLite();

  const [surveys, setSurveys] = useState([]);

  const getSavedSurveys = async () => {
    const resOpen = await openStore({});
    if (resOpen) {
      const data = await getAllValues();
      setSurveys(data);
    }
  };

  useEffect(() => {
    return getSavedSurveys();
  }, []);

  let completedSurveyNumber = 0;
  let currentSurveys = 0;

  return (
    <Fragment>
      <PageContainer>
        <PageTitleContainer>
          <img
            src="/assets/logos/guardadas-logo-white.svg"
            alt="logo encuestas guardadas"
          />
          <h1>Encuestas Guardadas</h1>
        </PageTitleContainer>
        <SurveysContainer>
          {surveys.map((survey) => {
            const data = JSON.parse(survey);
            data.isCompleted && completedSurveyNumber++;
            if (!data.uuid) {
              if (data.isSaved && !data.isCompleted) {
                currentSurveys++;
                return <SurveyCard key={data.id} {...data} />;
              }
            }
            return null;
          })}
          {completedSurveyNumber > 0 ? (
            <CompletedTitle>Encuestas completadas</CompletedTitle>
          ) : null}
          {surveys.map((survey) => {
            const data = JSON.parse(survey);
            if (!data.uuid) {
              if (data.isSaved && data.isCompleted) {
                currentSurveys++;
                return <SurveyCard key={data.id} {...data} />;
              }
            }
            return null;
          })}
          {currentSurveys === 0 ? (
            <CompletedTitle>
              No tienes encuestas guardadas aún
              <img src="assets/logos/empty.gif" alt="logo" />
            </CompletedTitle>
          ) : null}
        </SurveysContainer>
      </PageContainer>
      <NavBar />
    </Fragment>
  );
};
