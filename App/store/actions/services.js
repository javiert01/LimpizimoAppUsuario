import api from '../../api';
import { ASK_FOR_SERVICE, SET_IS_SERVICE_ASSIGNED, GET_SERVICE_COST_LIST, SET_REQUESTED_SERVICE } from './actionTypes';

export const askForService = service => dispatch => {
  api
    .post('servicio/crear', service)
    .then(res => {
      dispatch({ type: ASK_FOR_SERVICE, payload: res.data });
    })
    .catch(err => {
      console.log('xxxErr', err);
    });
};

export const setIsServiceAssigned = isServiceAssigned => {
  return {
      type: SET_IS_SERVICE_ASSIGNED,
      isServiceAssigned: isServiceAssigned
  }
}

export const getServiceCostList = (cleaningType, size) => {
  return async dispatch => {
  const response = await api.get('servicios/precios?cleaningType='+cleaningType+'&size='+size);
  const resData = await response.data;
  dispatch({ type: GET_SERVICE_COST_LIST, payload: resData}); 
  }
}

export const setRequestedService = service => dispatch => {
  dispatch({ type: SET_REQUESTED_SERVICE, payload: service });
};
