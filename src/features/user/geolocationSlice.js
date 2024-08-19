import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAddressFromGeocode } from "../../services/apiGeocoding";

function getPosition() {
  return new Promise(
    function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);     
    }
  )
}

// async function fetchLocation() {
//   const postionObj = await getPosition();
//   const position = {
//     lat : postionObj.coords.latitude,
//     long : postionObj.coords.longitudde
//   }

//   const addressObj = await getAddressFromGeocode(position);

//   const address = `${addressObj?.locality} , ${addressObj?.city} ${addressObj?.postcode} ${addressObj?.countryName}`

//   return {position, address}

// }


export const fetchAddressByGeolocation = createAsyncThunk("user/fetchGeoAddress", async function () {
  const postionObj = await getPosition();
  const position = {
    lat: postionObj.coords.latitude,
    long: postionObj.coords.longitude
  }

  const addressObj = await getAddressFromGeocode(position);

  const address = `${addressObj?.locality} , ${addressObj?.city} ${addressObj?.postcode} ${addressObj?.countryName}`

  return { position, address }
})