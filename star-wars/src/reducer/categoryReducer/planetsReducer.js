import { PLANETS_LIST_FAILURE, PLANETS_LIST_REQUEST, PLANETS_LIST_SUCCESS } from "../actionTypes";

const initialState = {
  loading: false,
  planetsList: {},
  error: "",
};

const planetsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLANETS_LIST_REQUEST:
      return {
        loading: true,
        planetsList: {},
        error: "",
      };

    case PLANETS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        planetsList: action.payload,
      };

    case PLANETS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        planetsList: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { planetsListReducer };
