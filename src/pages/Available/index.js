import React, { Fragment, useEffect, useState } from "react";
import {
  PageContainer,
  SurveysContainer,
  PageTitleContainer,
} from "../../styles/GenericStyles";
// components
import { SurveyCard } from "../../components/SurveyCard";
import { NavBar } from "../../components/NavBar";
import { LoaderComp } from "../../components/LoaderComp";
// rest
import { getSurveys } from "../../services/RestService";
// capacitor
import { useStorageSQLite } from "react-data-storage-sqlite-hook/dist";
import { Plugins } from "@capacitor/core";
// npm
import swal from "sweetalert";

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

export const Available = () => {
  const { Network } = Plugins;
  const {
    openStore,
    setItem,
    isKey,
    getAllValues,
    getAllKeys,
    getItem,
    removeItem,
  } = useStorageSQLite();
  const [allSurveys, setAllSurveys] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllSurveys = async () => {
    setIsLoading(true);
    const status = await Network.getStatus();
    const resOpen = await openStore({});
    if (status.connected) {
      const response = await getSurveys();
      console.log(response);
      const res = response.data;
      if (resOpen) {
        const localSurveys = await getAllKeys();
        localSurveys.map(async (key) => {
          if (!isNaN(key)) {
            if (!res.some((e) => e.id === key)) {
              await removeItem(key);
            }
          }
          return null;
        });
        res.map(async (survey) => {
          const json = survey.json.replace(/\\/g, "");
          const obj = {
            ...survey,
            json: JSON.parse(json),
          };
          const isOnDatabase = await isKey(survey.id);
          if (isOnDatabase) {
            const objectInDatabase = await getItem(survey.id);
            const parsedObject = JSON.parse(objectInDatabase);
            if (
              JSON.stringify(obj.json) !== JSON.stringify(parsedObject.json) ||
              obj.name !== parsedObject.name
            ) {
              console.log(`${survey.id} saved in local database`);
              await setItem(survey.id, JSON.stringify(obj));
            }
          } else {
            console.log(`Survey with ID: ${survey.id} saved in local database`);
            await setItem(survey.id, JSON.stringify(obj));
            // improve this line
            const parsedSurveys = await getAllValues();
            setAllSurveys(parsedSurveys);
          }
        });
        const parsedSurveys = await getAllValues();
        await setAllSurveys(parsedSurveys);
      }
    } else {
      if (resOpen) {
        const surveys = await getAllValues();
        setAllSurveys(surveys);
      }
      swal(
        "Sin conexión. Se mostrarán las encuestas que hayas descargado previamente"
      );
    }
    setIsLoading(false);
  };

  useEffect(() => {
    return getAllSurveys();
  }, []);

  let availableSurveysNumber = 0;
  const region = localStorage.getItem("userRegion");

  return (
    <Fragment>
      <PageContainer>
        <PageTitleContainer>
          <img
            src="/assets/logos/disponibles-logo-white.svg"
            alt="logo encuestas disponibles"
          />
          <h1>Encuestas Disponibles</h1>
        </PageTitleContainer>
        <SurveysContainer>
          {isLoading ? (
            <LoaderComp />
          ) : allSurveys.length === 0 ? (
            <p>No hay formularios para completar en este momento.</p>
          ) : (
            <Fragment>
              {allSurveys.map((survey) => {
                const parsedSurvey = JSON.parse(survey);
                // validate if a survey is in display mode
                if (region === "Colombia") {
                  if (!parsedSurvey.uuid) {
                    if (
                      parsedSurvey.json.Publicado &&
                      !parsedSurvey.isCompleted &&
                      !parsedSurvey.json.Ubicación
                    ) {
                      availableSurveysNumber++;
                      return (
                        <SurveyCard key={parsedSurvey.id} {...parsedSurvey} />
                      );
                    }
                  }
                } else {
                  if (!parsedSurvey.uuid) {
                    if (
                      parsedSurvey.json.Publicado &&
                      !parsedSurvey.isCompleted &&
                      parsedSurvey.json.Ubicación === region
                    ) {
                      availableSurveysNumber++;
                      return (
                        <SurveyCard key={parsedSurvey.id} {...parsedSurvey} />
                      );
                    }
                  }
                }
                return null;
              })}
              {availableSurveysNumber === 0 && (
                <CompletedTitle>
                  No hay encuestas para completar en este momento
                  <img src="assets/logos/empty.gif" alt="logo" />
                </CompletedTitle>
              )}
            </Fragment>
          )}
        </SurveysContainer>
      </PageContainer>
      <NavBar />
    </Fragment>
  );
};
