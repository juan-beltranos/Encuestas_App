// rest
import { getCountryData } from "../services/RestService";
// database
import { useStorageSQLite } from "react-data-storage-sqlite-hook/dist";
import { Plugins } from "@capacitor/core";
// npm
import swal from "sweetalert";

function useCurrentUserInfo() {
  const { Geolocation, Device, Network } = Plugins;
  const { openStore, setItem, clear } = useStorageSQLite();

  const getCountry = async (lat, lng) => {
    const data = await getCountryData(lat, lng);
    return data;
  };

  const getInitialData = async () => {
    // await clear()
    const status = await Network.getStatus();
    if (status.connected) {
      const info = await Device.getInfo();
      let countryData;
      await Geolocation.getCurrentPosition()
        .then(async (GeolocationPosition) => {
          countryData = await getCountry(
            GeolocationPosition.coords.latitude,
            GeolocationPosition.coords.longitude
          );
          const resOpen = await openStore({});
          if (resOpen) {
            const userInfo = {
              uuid: !info.uuid ? "No permitido" : info.uuid,
              location: countryData.data.results[0].formatted_address,
            };
            console.log(userInfo);
            await setItem("userInfo", JSON.stringify(userInfo));
          }
        })
        .catch((err) => swal("Por favor activa la localización"));
    }
  };

  return [getInitialData];
}

export default useCurrentUserInfo;
