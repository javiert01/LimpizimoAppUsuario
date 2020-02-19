import { ASK_FOR_SERVICE, SET_IS_SERVICE_ASSIGNED, SET_REQUESTED_SERVICE } from '../actions/actionTypes';

const initialState = {
  askForService: {},
  isServiceAssigned: false,
  requestedService: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ASK_FOR_SERVICE:
      return { ...state, askForService: action.payload };
    case SET_IS_SERVICE_ASSIGNED:
      return { ...state, isServiceAssigned: action.isServiceAssigned };
    case SET_REQUESTED_SERVICE:
      return { ...state, requestedService: action.payload };
    default:
      return state;
  }
};

export default reducer;
