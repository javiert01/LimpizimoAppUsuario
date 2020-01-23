import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const bienvenidoUsuario = (props) => (
    <View style={styles.textContainer}>
        <Text style={styles.tituloText}>
            Bienvenido {props.usuario.nombre}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    textContainer: {
        width: "100%",
        backgroundColor: "#6EBE43",
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 15,
        paddingTop: 8,
        paddingBottom: 8
    },
    tituloText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15,
        textAlign: 'center'
    },

});

export default bienvenidoUsuario;

