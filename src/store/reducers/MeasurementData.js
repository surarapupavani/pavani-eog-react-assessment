import { GET_MEASUREMENTS } from "../actions";
// import { GET_TUBING_PRESSURE } from "../actions";
// import { GET_CASING_PRESSURE } from "../actions";
// import { GET_OIL_TEMP } from "../actions";
// import { GET_FLARE_TEMP } from "../actions";
// import { GET_WATER_TEMP } from "../actions";
// import { GET_INJ_VALVE_OPEN } from "../actions";

const initialState = {
  tubingPressure: [],
  casingPressure: [],
  oilTemp: [],
  flareTemp: [],
  waterTemp: [],
  injValveOpen: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MEASUREMENTS:
      // Convert time in each obj from epoch to hrs/min/sec.
      let measurements = action.payload

      // Hmmm.
      // measurements.forEach((obj) => {
      //   let time = new Date(obj.at).toLocaleTimeString("en-US");
      //   obj.at = time;
      //   console.log(obj.at);
      // });

      return measurements;
    // case GET_TUBING_PRESSURE:
    //   return {
    //     ...state,
    //     tubingPressure: action.payload
    //   }
    default:
      return state;
  }
};