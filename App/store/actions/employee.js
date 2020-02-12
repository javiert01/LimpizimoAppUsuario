import api from '../../api';
import { SET_ASSIGNED_EMPLOYEE } from './actionTypes';

// remove this when the request to server is done

export const setAssignedEmployee = data => {
    let assignedEmployee = data.empleado;
    console.log('this is your employee',assignedEmployee);
    return {
        type: SET_ASSIGNED_EMPLOYEE,
        assignedEmployee: assignedEmployee
    }
};