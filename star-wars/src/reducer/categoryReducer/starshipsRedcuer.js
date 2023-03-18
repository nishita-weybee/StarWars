import { STARSHIPS_LIST_FAILURE, STARSHIPS_LIST_REQUEST, STARSHIPS_LIST_SUCCESS } from "../actionTypes";

const initialState = {
  loading: false,
  starshipLists: {},
  error: "",
};

const starshipListsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STARSHIPS_LIST_REQUEST:
      return {
        loading: true,
        starshipLists: {},
        error: "",
      };

    case STARSHIPS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        starshipLists: action.payload,
      };

    case STARSHIPS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        starshipLists: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { starshipListsReducer };
