import { VEHICLES_LIST_FAILURE, VEHICLES_LIST_REQUEST, VEHICLES_LIST_SUCCESS } from "../actionTypes";

const initialState = {
  loading: false,
  vechiclesList: {},
  error: "",
};

const vechiclesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case VEHICLES_LIST_REQUEST:
      return {
        loading: true,
        vechiclesList: {},
        error: "",
      };

    case VEHICLES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        vechiclesList: action.payload,
      };

    case VEHICLES_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        vechiclesList: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { vechiclesListReducer };
