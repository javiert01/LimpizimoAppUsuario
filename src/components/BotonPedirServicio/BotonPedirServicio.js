import React from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight, TouchableNativeFeedback } from 'react-native'
import pedirServicioImg from '../../assets/boton-pedir-servicio.png'

const botonPedirServicio = (props) => {
    const imgBoton = {
        image: pedirServicioImg
    }
    return(

    <View style={styles.viewContainer}>
        <TouchableNativeFeedback onPress={() => props.onEnviarServicio()}>
        <View style={styles.viewContainer}>
        <Image source={imgBoton.image} style={styles.imgFondo} />
        <Text style={styles.textBoton}>PEDIR</Text>
        <Text style={styles.textBoton2}>AHORA</Text>
        <Text style={styles.textCostoServicio}>U$D {props.costoServicio}</Text>
        </View>
        </TouchableNativeFeedback>     
    </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        //position: 'absolute', 
        marginTop: 4,
        paddingTop: 5,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    imgFondo: {
        position: 'absolute',
        top: 0, 
        //left: 0, 
        //right: 0, 
        //bottom: 0
    },
    textBoton: {
        top: 20,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textBoton2: {
        top: 25,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textCostoServicio: {
        top: 35,
        right: 3,
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export default botonPedirServicio;