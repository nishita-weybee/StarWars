import { FILMS_LIST_FAILURE, FILMS_LIST_REQUEST, FILMS_LIST_SUCCESS } from "../actionTypes";

const initialState = {
  loading: false,
  filmsList: {},
  error: "",
};

const filmsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILMS_LIST_REQUEST:
      return {
        loading: true,
        filmsList: {},
        error: "",
      };

    case FILMS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        filmsList: action.payload,
      };

    case FILMS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        filmsList: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { filmsListReducer };
