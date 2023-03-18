import { CHARACTERS_LIST_FAILURE, CHARACTERS_LIST_REQUEST, CHARACTERS_LIST_SUCCESS } from "../actionTypes";

const initialState = {
  loading: false,
  charactersList: {},
  error: "",
};

const charactersListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTERS_LIST_REQUEST:
      return {
        loading: true,
        charactersList: {},
        error: "",
      };

    case CHARACTERS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        charactersList: action.payload,
      };

    case CHARACTERS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        charactersList: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { charactersListReducer };
