import React, { Fragment } from "react";
// styles
import {
  PageContainer,
  SurveysContainer,
  PageTitleContainer,
} from "../../styles/GenericStyles";
import { Container } from "./styles";
// components
import { NavBar } from "../../components/NavBar";

export const AboutUs = () => {
  return (
    <Fragment>
      <PageContainer>
        <PageTitleContainer>
          <img
            src="/assets/logos/quienes-somos-logo-white.svg"
            alt="logo quiénes Somos"
          />
          <h1>Quiénes Somos</h1>
        </PageTitleContainer>
        <SurveysContainer color="white">
          <Container>
            <h2>¿Qué es la Federación Luterana Mundial?</h2>
            <p>
              La Federación Luterana Mundial – FLM, es una comunión global de
              iglesias cristianas de tradición luterana compuesta por 145
              iglesias miembro en 98 países, que representan a 72 millones de
              personas cristianas. Con sede en Ginebra, Suiza, la FLM existe
              desde finales de la Segunda Guerra Mundial, con el objetivo de
              apoyar a los derechos de las personas para que (ob)tengan una vida
              digna con justicia y paz. El Servicio Mundial es el brazo
              humanitario y de desarrollo de la FLM y opera en 25 países de
              África, Medio Oriente, Asia, y América Latina y el Caribe,
              respondiendo a diversas emergencias y necesidades causadas por la
              violencia, el cambio climático y la migración, apoyando a
              diferentes comunidades étnicas, personas afectadas por el
              conflicto armado interno y liderazgos de comunidades locales.
            </p>
            <h2>¿Con quiénes trabajamos?</h2>
            <ul>
              <li>
                Comunidades étnicas (indígenas y afrocolombianas) y campesinas.
              </li>
              <li>
                Personas que están en un proceso de reintegración a la vida
                civil.
              </li>
              <li>
                Líderes sociales hombres y mujeres, defensores de derechos
                humanos y ambientales.{" "}
              </li>
            </ul>
            <h2>Áreas estratégicas </h2>
            <ul>
              <li>Protección y cohesión social</li>
              <li>Medios de vida y justicia climática</li>
              <li>Servicios humanitarios de calidad</li>
            </ul>
            <p>
              Durante este período estratégico, el programa de país se centrará
              en la <strong>Justicia de Género.</strong>
            </p>
          </Container>
        </SurveysContainer>
      </PageContainer>
      <NavBar />
    </Fragment>
  );
};
