import {
  SELECT_DOMICILIO,
  SELECT_TIPO_SERVICIO,
  SELECT_RECURRENCIA,
  SELECT_DIA_SERVICIO,
  SELECT_HORA_SERVICIO,
  SELECT_NUMERO_HORAS,
} from '../actions/actionTypes';
import edificioPickerImage from '../../assets/icono-edificio-morado.png';
import casaPickerImage from '../../assets/icono-casa-morado.png';
import otrosPickerImage from '../../assets/icono-otros-morado.png';
import limpiezaNImage from '../../assets/limpieza-normal-circulo.png';
import limpiezaPImage from '../../assets/limpieza-profunda-circulo.png';

const initialState = {
  domicilios: [
    {
      id: 0,
      tipoDomicilio: 'Trabajo',
      callePrincipal: 'Catalina Aldaz',
      ciudad: 'Quito',
    },
    {
      id: 1,
      tipoDomicilio: 'Casa',
      callePrincipal: 'Luis Tufino',
      ciudad: 'Quito',
    },
    {
      id: 2,
      tipoDomicilio: 'Otro',
      callePrincipal: 'Santa Lucia',
      ciudad: 'Quito',
    },
  ],
  domicilioSelected: {
    id: 0,
    tipoDomicilio: 'Trabajo',
    callePrincipal: 'Catalina Aldaz',
    ciudad: 'Quito',
  },
  iconos: [
    {
      tipoDomicilio: 'Trabajo',
      image: edificioPickerImage,
    },
    {
      tipoDomicilio: 'Casa',
      image: casaPickerImage,
    },
    {
      tipoDomicilio: 'Otro',
      image: otrosPickerImage,
    },
  ],
  iconoSelected: {
    tipoDomicilio: 'Trabajo',
    image: edificioPickerImage,
  },
  tipoServicios: [
    {
      descripcion: 'Limpieza Normal',
      image: limpiezaNImage,
    },
    {
      descripcion: 'Limpieza Profunda',
      image: limpiezaPImage,
    },
  ],
  tipoServicioSelected: null,
  tipoRecurrenciaSelected: null,
  diaServicioSelected: null,
  horaServicioSelected: null,
  numeroHorasSelected: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_DOMICILIO:
      return {
        ...state,
        domicilioSelected: state.domicilios.find(domicilio => {
          return domicilio.id === action.domicilioID;
        }),
        iconoSelected: state.iconos.find(icono => {
          return icono.tipoDomicilio === action.domicilioValue;
        }),
      };
    case SELECT_TIPO_SERVICIO:
      return {
        ...state,
        tipoServicioSelected: action.tipoServicio,
      };
    case SELECT_RECURRENCIA:
      return {
        ...state,
        tipoRecurrenciaSelected: action.tipoRecurrencia,
      };
    case SELECT_DIA_SERVICIO:
      return {
        ...state,
        diaServicioSelected: action.diaServicio,
      };
    case SELECT_HORA_SERVICIO:
      return {
        ...state,
        horaServicioSelected: action.horaServicio,
      };
    case SELECT_NUMERO_HORAS:
      return {
        ...state,
        numeroHorasSelected: action.numeroHoras,
      };
    default:
      return state;
  }
};

export default reducer;
