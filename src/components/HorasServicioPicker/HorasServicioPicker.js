import React, { Component } from 'react';
import {Picker, View, Image, StyleSheet} from 'react-native';
import relojPickerImage from '../../../src/assets/icono-reloj-morado.png';


class HorasServicioPicker extends Component {
    state = {
        horasSeleccionadas: 0,
        icono: {
            image: relojPickerImage
        },
        horasDisponibles: []
    };

    render() {
        this.state.horasDisponibles = [];
        this.state.horasDisponibles.push(this.props.tiempoServicio);
        for(let i = this.state.horasDisponibles[0]; i <= 8; i++) {
            this.state.horasDisponibles.push(i);
        }
        return(
            <View style={styles.viewContainer}>
            <Image source={this.state.icono.image} 
                style={styles.icono}/>
            <View style={styles.pickerContainer}>
            <Picker
            selectedValue={this.state.horasSeleccionadas}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
                this.setState({horasSeleccionadas: itemValue})
            }>
            {this.state.horasDisponibles.map((horas) => {
                return (<Picker.Item label={'+'+horas + ' horas'} value={horas} key={horas}/>) //if you have a bunch of keys value pair
            })}
            </Picker>
            </View>
            </View>
        );
    };
}   

const styles = StyleSheet.create({
    viewContainer: {
        flexDirection: 'row',
       // alignItems: 'center',
        backgroundColor: '#63c331',
        paddingLeft: 4,
        borderRadius: 20
    },
    pickerContainer: {
        backgroundColor: '#63c331',
        flexDirection: 'column',
        borderRadius: 20,
        height: 43
    },
    picker: {
        width: 130,
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

export default HorasServicioPicker;
