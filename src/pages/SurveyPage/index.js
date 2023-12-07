import React, { Fragment, useState, useEffect } from "react";
// styles
import {
  PageContainer,
  SurveysContainer,
  PageTitleContainer,
} from "../../styles/GenericStyles";
import { Container, Title, StepsContainer } from "./styles";
// components
import { NavBar } from "../../components/NavBar";
import { LoaderComp } from "../../components/LoaderComp";
// npm
import * as Survey from "survey-react";
import "survey-react/survey.css";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
// rest
import { SaveResult } from "../../services/RestService";
// database
import { useStorageSQLite } from "react-data-storage-sqlite-hook/dist";
import { Plugins } from "@capacitor/core";
// hooks
import useCurrentUserInfo from "../../hooks/useCurrentUserInfo";

import "./customCss.css";

// buttons
Survey.defaultStandardCss.progressButtonsListElementCurrent =
  "sv_progress-buttons__list-element--current current-button";
Survey.defaultStandardCss.progressButtonsPageTitle = "title";
Survey.defaultStandardCss.progressButtonsList =
  "sv_progress-buttons__list dots";
Survey.defaultStandardCss.progressButtonsImageButtonLeft =
  "sv_progress-buttons__image-button-left left-arrow";
Survey.defaultStandardCss.progressButtonsImageButtonRight =
  "sv_progress-buttons__image-button-right right-arrow";
// Progress bar
Survey.defaultStandardCss.progress = "sv_progress progress";
// page
Survey.defaultStandardCss.page.title = "sv_page_title page-title";
Survey.defaultStandardCss.body = "sv_body container";
Survey.defaultStandardCss.footer = "sv_nav nav";
Survey.defaultStandardCss.page.root = "sv_p_root root";
Survey.defaultStandardCss.progressButtonsListElementPassed =
  "sv_progress-buttons__list-element--passed passed";
Survey.defaultStandardCss.progressButtonsContainerCenter =
  "sv_progress-buttons__container-center buttons-container";
Survey.defaultStandardCss.completedPage = "sv_completed_page completed";

export const SurveyPage = ({ match, history }) => {
  const { openStore, getItem, setItem } = useStorageSQLite();
  const {
    params: { surveyId },
  } = match;
  const { Network } = Plugins;
  let historyRouter = useHistory();

  const [isLoading, setIsLoading] = useState(true);
  const [finalData, setFinalData] = useState({});
  const [getInitialData] = useCurrentUserInfo();

  const model = new Survey.Model(finalData.json);
  model.data = finalData.values;

  const saveData = async (data) => {
    const savedSurvey = {
      ...finalData,
      isSaved: true,
      values: data,
    };
    const resOpen = await openStore({});
    if (resOpen) {
      await setItem(surveyId, JSON.stringify(savedSurvey));
    }
  };

  var onValueChanged = async function (sender, options) {
    console.log(sender.data);
    await saveData(sender.data);
  };

  const onComplete = async (result) => {
    const resOpen = await openStore({});
    const status = await Network.getStatus();
    if (status.connected) {
      let userInfo = { uuid: "default", location: "default" };
      if (resOpen) {
        userInfo = await getItem("userInfo");
      }
      console.log(result.data);
      const parsedInfo = JSON.parse(userInfo);
      if (parsedInfo) {
        try {
          const data = JSON.stringify({
            ...result.data,
            uuid: parsedInfo.uuid,
            location: parsedInfo.location,
          });
          console.log(data);
          const bodyFormData = new FormData();
          bodyFormData.append("SurveyId", surveyId);
          bodyFormData.append("Json", data);
          await SaveResult(bodyFormData);
          const completedSurvey = {
            ...finalData,
            values: data,
            isSaved: true,
            isCompleted: true,
          };
          if (resOpen) {
            await setItem(surveyId, JSON.stringify(completedSurvey));
          }
          swal(
            "Envío de encuesta",
            "Encuesta enviada correctamente",
            "success"
          );
        } catch (error) {
          console.log(error);
        }
      } else {
        historyRouter.push("/saved");
        swal("Por favor activa la localización antes de enviar la encuesta");
      }
    } else {
      historyRouter.push("/saved");
      swal(
        "Sin conexión. Intenta enviar el formulario cuando tengas acceso a la red."
      );
    }
  };

  const findSurvey = async () => {
    const resOpen = await openStore({});
    if (resOpen) {
      const obj = await getItem(surveyId);
      setFinalData(JSON.parse(obj));
    }
    setIsLoading(false);
  };

  const onCurrentPageChanged = () => {
    // setCurrentPage(model.currentPageNo)
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (finalData.isCompleted) {
      swal("Envío de encuesta", "Encuesta enviada correctamente", "success");
    }
    console.log(finalData);

    getInitialData()
      .then(() => {
        return findSurvey();
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (finalData.isCompleted) {
      swal(
        "Encuesta completada previamente",
        "¿Está seguro de querer llenar la encuesta de nuevo?",
        {
          buttons: {
            cancel: "Cancelar",
            catch: {
              text: "Seguir",
              value: "catch",
            },
          },
        }
      ).then((value) => {
        switch (value) {
          case "catch":
            break;

          default:
            historyRouter.push("/saved");
        }
      });
    }
    console.log(finalData);
  }, [finalData]);

  const defaultImg = "/assets/images/default-survey.png";
  const defaultPlace = "Default place";

  return (
    <Fragment>
      <PageContainer>
        {isLoading ? (
          <LoaderComp color="white" />
        ) : (
          <Fragment>
            <PageTitleContainer>
              <Container>
                <Title>
                  <img
                    src={
                      finalData.json.logo
                        ? finalData.json.logo.es
                          ? finalData.json.logo.es
                          : finalData.json.logo
                        : defaultImg
                    }
                    alt="imágen de formulario"
                  />
                  <div>
                    <h2>{finalData.name}</h2>
                    <h2>
                      {finalData.json.Ubicación
                        ? finalData.json.Ubicación
                        : defaultPlace}
                    </h2>
                  </div>
                </Title>
                <StepsContainer>
                  {/* <SurveyNav
                    pages={finalData.json.pages}
                    pageNumber={currentPage}
                  /> */}
                </StepsContainer>
              </Container>
            </PageTitleContainer>
            <SurveysContainer isSurvey={true} color="#F4F4F4">
              <Survey.Survey
                model={model}
                onComplete={onComplete}
                onValueChanged={onValueChanged}
                onCurrentPageChanged={onCurrentPageChanged}
              />
            </SurveysContainer>
          </Fragment>
        )}
      </PageContainer>
      <NavBar />
    </Fragment>
  );
};
