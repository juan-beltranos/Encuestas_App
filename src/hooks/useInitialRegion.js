import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const locations = {
  Colombia: "Colombia",
  Medellín: "Medellín",
  Cali: "Cali",
  Bogotá: "Bogotá",
  Barranquilla: "Barranquilla",
};

function useInitialRegion() {
  const MySwal = withReactContent(Swal);
  const region = localStorage.getItem("userRegion");

  const getRegion = () => {
    if (!region || region === "undefined") {
      MySwal.fire({
        title: <p>Selecciona tu región</p>,
        input: "select",
        inputOptions: locations,
        inputPlaceholder: "Región",
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value !== "") {
              resolve();
            } else {
              resolve("Este campo es requerido");
            }
          });
        },
      }).then((result) => {
        if (result === "undefined") {
          getRegion();
        } else {
          console.log(result);
          return localStorage.setItem("userRegion", result.value);
        }
      });
    }
  };

  return [getRegion];
}

export default useInitialRegion;
