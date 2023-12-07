import React, { Fragment, useState } from "react";
// npm
import { useForm } from "react-hook-form";
import swal from "sweetalert";
// styles
import {
  PageContainer,
  SurveysContainer,
  PageTitleContainer,
} from "../../styles/GenericStyles";
import {
  FormContainer,
  CardForm,
  Input,
  TextArea,
  ButtonContainer,
  InfoContainer,
  LoaderContainer,
} from "./styles";
// components
import { NavBar } from "../../components/NavBar";
// rest
import { SendEmail } from "../../services/RestService";
import Loader from "react-loader-spinner";
import { Plugins } from "@capacitor/core";

export const Contact = () => {
  const { register, handleSubmit, watch, errors, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { Network } = Plugins;

  const onSubmit = async (data) => {
    setIsLoading(true);
    const status = await Network.getStatus();
    if (status.connected) {
      try {
        const res = await SendEmail(data);
        swal("Enviado", "Mensaje enviado correctamente", "success");
        console.log(res);
      } catch (err) {
        console.log(err);
      }
      reset();
    } else {
      swal(
        "Sin conexión. Vuelve a intentarlo cuando estés conectado a la red."
      );
    }
    setIsLoading(false);
  };

  return (
    <Fragment>
      <PageContainer>
        <PageTitleContainer>
          <img
            src="/assets/logos/contacto-logo-white.svg"
            alt="logo encuestas guardadas"
          />
          <h1>Contáctenos</h1>
        </PageTitleContainer>
        <SurveysContainer>
          <FormContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardForm>
                <h4>Nombre</h4>
                <Input name="name" ref={register({ required: true })} />
                <h4>Teléfono</h4>
                <Input name="phone" ref={register({ required: true })} />
                <h4>Email</h4>
                <Input name="email" ref={register({ required: true })} />
                <h4>Mensaje</h4>
                <TextArea name="message" ref={register({ required: true })} />
              </CardForm>
              <ButtonContainer>
                <button type="submit">
                  {isLoading && (
                    <LoaderContainer>
                      <Loader
                        type="Oval"
                        color="white"
                        height={20}
                        width={20}
                      />
                    </LoaderContainer>
                  )}
                  Enviar
                </button>
              </ButtonContainer>
            </form>
            <InfoContainer>
              <h5>Federación Luterana Mundial – Servicio Mundial</h5>
              <p>Contáctenos: flm.colombia@lutheranworld.org</p>
            </InfoContainer>
          </FormContainer>
        </SurveysContainer>
      </PageContainer>
      <NavBar />
    </Fragment>
  );
};
