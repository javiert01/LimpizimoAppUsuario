import api from '../../api';
import { GET_PLACES } from './actionTypes';

// remove this when the request to server is done
const places = [
  {
    id: 0,
    tipoDomicilio: 'Oficina',
    tamanioDomicilio: 'smallOffice',
    callePrincipal: 'Catalina Aldaz',
    ciudad: 'Quito',
  },
  {
    id: 1,
    tipoDomicilio: 'Casa',
    tamanioDomicilio: 'placeBig',
    callePrincipal: 'Luis Tufino',
    ciudad: 'Quito',
  },
  {
    id: 2,
    tipoDomicilio: 'Otro',
    tamanioDomicilio: 'placeBig',
    callePrincipal: 'Santa Lucia',
    ciudad: 'Quito',
  },
];

export const getPlaces = userId => dispatch => {
  // request to server to get the user's places
  dispatch({ type: GET_PLACES, payload: places });
};

