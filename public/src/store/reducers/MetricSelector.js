import { SELECT_METRIC } from "../actions";

const initialState = {
	selectedMetric: 'oilTemp'
};

// const initialState = {
// 	tubingPressure: false,
// 	casingPressure: false,
// 	oilTemp: false,
// 	flareTemp: false,
// 	waterTemp: false,
// 	injValveOpen: false
// };

export default (state = initialState, action) => {
	switch (action.type) {
		case SELECT_METRIC:
			// Select single metric
			return { selectedMetric: action.payload }

			// Select multiple metrics
			// return {
			// 	...state,
			// 	[action.payload]: !state[action.payload]
			// }
		default:
			return state;
	}
};
