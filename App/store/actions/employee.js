import api from '../../api';
import { SET_ASSIGNED_EMPLOYEE } from './actionTypes';

// remove this when the request to server is done

export const setAssignedEmployee = ({ empleado: assignedEmployee }) => {
  return {
    type: SET_ASSIGNED_EMPLOYEE,
    payload: assignedEmployee,
  };
};
