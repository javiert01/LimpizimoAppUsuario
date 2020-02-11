import {
  ASK_FOR_SERVICE,
  SET_IS_SERVICE_ASSIGNED,
} from '../actions/actionTypes';

const initialState = {
  askForService: {},
  isServiceAssigned: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ASK_FOR_SERVICE:
      return { ...state, askForService: action.payload };
    case SET_IS_SERVICE_ASSIGNED:
      return { ...state, isServiceAssigned: action.isServiceAssigned };
    default:
      return state;
  }
};

export default reducer;
