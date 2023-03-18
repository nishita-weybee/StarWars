import { SPECIES_LIST_FAILURE, SPECIES_LIST_REQUEST, SPECIES_LIST_SUCCESS } from "../actionTypes";

const initialState = {
  loading: false,
  speciesList: {},
  error: "",
};

const  speciesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPECIES_LIST_REQUEST:
      return {
        loading: true,
        speciesList: {},
        error: "",
      };

    case SPECIES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        speciesList: action.payload,
      };

    case SPECIES_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        speciesList: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { speciesListReducer };
