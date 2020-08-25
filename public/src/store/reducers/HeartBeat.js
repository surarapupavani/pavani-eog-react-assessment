import { GET_HEARTBEAT } from "../actions";

const initialState = {
  before: null,
  after: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_HEARTBEAT:
      return {
        ...state,
        before: action.payload,
        after: action.payload - 1800000 // 1800000 equals 30min.
      };
    default:
      return state;
  }
};
