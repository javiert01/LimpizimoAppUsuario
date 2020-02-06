import {SELECT_DOMICILIO, SELECT_TIPO_SERVICIO, 
        SELECT_HORA_SERVICIO, SELECT_NUMERO_HORAS, 
        SELECT_DIA_SERVICIO, SELECT_RECURRENCIA, SET_IS_SERVICE_ASSIGNED} from './actionTypes';

export const selectDomicilio = (value, id) => {
    return {
        type: SELECT_DOMICILIO,
        domicilioValue: value,
        domicilioID: id
    }
}

export const selectTipoServicio = (tipoServicio) => {
    return {
        type: SELECT_TIPO_SERVICIO,
        tipoServicio: tipoServicio
    }
}

export const selectRecurrencia = (tipoRecurrencia) => {
    return {
        type: SELECT_RECURRENCIA,
        tipoRecurrencia: tipoRecurrencia
    }
}

export const selectDiaServicio = (dia) => {
    return {
        type: SELECT_DIA_SERVICIO,
        diaServicio: dia
    }
}

export const selectHoraServicio = (hora) => {
    return {
        type: SELECT_HORA_SERVICIO,
        horaServicio: hora
    }
}

export const selectNumeroHoras = (numeroHoras) => {
    return {
        type: SELECT_NUMERO_HORAS,
        numeroHoras: numeroHoras
    }
}

export const setIsServiceAssigned = (isServiceAssigned) => {
    console.log('seteando servicio asignado', isServiceAssigned);
    return {
        type: SET_IS_SERVICE_ASSIGNED,
        isServiceAssigned: isServiceAssigned
    }
}