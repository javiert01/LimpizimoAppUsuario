import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native' 

const tipoServicio = (props) => (
    <View>
    <View style={styles.viewContainerTitulo}>
        <Text style={styles.tituloText}>¿Qué servicio necesitas?</Text>
        <Text style={styles.subtituloText}>Elige el tipo de limpieza</Text>
    </View>
    <View style={styles.viewContainer} >
        <Image 
        source={props.tipoServicio[0].image} 
        style={styles.limpiezaImage}/>
        <Image 
        source={props.tipoServicio[1].image} 
        style={styles.limpiezaImage}/>
    </View>
    <View style={styles.viewContainer}>
        <Text style={styles.descripcionText}>{props.tipoServicio[0].descripcion}</Text>
        <Text style={styles.descripcionText}>{props.tipoServicio[1].descripcion}</Text>
    </View>
    </View>
);

const styles = StyleSheet.create({
    viewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#672D91'
    },
    viewContainerTitulo: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#672D91'
    },
    limpiezaImage: {
        marginRight: 8,
        height: 50,
        width: 50,
        padding: 50
    },
    tituloText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    },
    subtituloText: {
        color:'white',
        padding: 10
    },
    descripcionText: {
        color: 'white',
        padding: 5
    }
});

export default tipoServicio;