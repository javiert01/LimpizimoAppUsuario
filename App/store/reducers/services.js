import {
  ASK_FOR_SERVICE,
  SET_IS_SERVICE_ASSIGNED,
  GET_SERVICE_COST_LIST,
  SET_REQUESTED_SERVICE,
} from '../actions/actionTypes';

const initialState = {
  askForService: {},
  isServiceAssigned: false,
  serviceCostList: null,
  requestedService: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ASK_FOR_SERVICE:
      return { ...state, askForService: action.payload };
    case SET_IS_SERVICE_ASSIGNED:
      return { ...state, isServiceAssigned: action.isServiceAssigned };
      case GET_SERVICE_COST_LIST:
        return {...state, serviceCostList: action.payload }
    case SET_REQUESTED_SERVICE:
      return { ...state, requestedService: action.payload };
    default:
      return state;
  }
};

export default reducer;
