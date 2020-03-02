import { GET_PLACES, SET_SELECTED_PLACE } from '../actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PLACES:
      return { ...state, places: action.payload };
    case SET_SELECTED_PLACE:
      return { ...state, selectedPlace: action.payload };
    default:
      return state;
  }
};

