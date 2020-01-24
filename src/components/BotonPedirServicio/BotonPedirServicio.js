import React from 'react';
import {View, Text, Image } from 'react-native'
import pedirServicioImg from '../../assets/boton-pedir-servicio.png'

const botonPedirServicio = (props) => {
    const imgBoton = {
        image: pedirServicioImg
    }
    return(
    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={imgBoton.image}/>
        <Text>Pedir Servicio</Text>
    </View>
    );
}

export default botonPedirServicio;