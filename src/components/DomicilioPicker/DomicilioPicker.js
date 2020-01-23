import React from 'react';
import {Picker, StyleSheet, View, Image, Text} from 'react-native';


const domicilioPicker = (props) => (
    <View style={styles.viewContainer}>
    <Image source={props.iconos[0].image} 
        style={styles.icono}/>
    <View style={styles.pickerContainer}>
    <Picker
    selectedValue={props.domicilioSelected.id}
    style={styles.picker}
    onValueChange={(itemValue, itemIndex) => props.onItemSelected(itemIndex)
    }>
    {props.domicilios.map((domicilio) => {
        return (<Picker.Item label={domicilio.tipoDomicilio} value={domicilio.id} key={domicilio.id}/>) //if you have a bunch of keys value pair
    })}
    </Picker>
    <Text style={styles.descripcionDomicilioText}>
        {props.domicilioSelected.callePrincipal}, {props.domicilioSelected.ciudad}
    </Text>
    </View>
    </View>
);


const styles = StyleSheet.create({
    viewContainer: {
        flexDirection: 'row',
       // alignItems: 'center',
        backgroundColor: '#672D91',
        paddingLeft: 4,
        borderRadius: 20
    },
    pickerContainer: {
        backgroundColor: '#672D91',
        flexDirection: 'column',
        borderRadius: 20,
        height: 60
    },
    picker: {
        width: 200,
        height: 40,
        color: 'white'
    },
    icono: {
        marginTop: 10,
        marginRight: 8,
        height: 10,
        width: 25,
        borderRadius: 20, 
        backgroundColor: 'white',
        padding: 15
    },
    descripcionDomicilioText: {
        color: 'white'
    }
});

export default domicilioPicker;