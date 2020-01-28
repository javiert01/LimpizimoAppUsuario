import React, {Component} from 'react';
//import {View, StyleSheet, Text, Button} from 'react-native';
import {View, StyleSheet, Text, TouchableOpacity, Picker} from 'react-native';
import MyDataPicker2 from '../MyDataPicker/MyDataPicker2';

class Recurrencia extends Component {

  state = {
    unicaVezSelected: true,
    recurrencia: '1 vez a la semana'
  }
  
  render() {
    let textRecurrencia = null;
    let recurrenciaPicker = null;
    if(!this.state.unicaVezSelected){
      textRecurrencia = (
        <Text style={styles.txtStl}>Recurrencia</Text>
      );
      recurrenciaPicker = (
        <Picker
        selectedValue={this.state.recurrencia}
        style={styles.recurrenciaPicker}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({recurrencia: itemValue})
        }>
        <Picker.Item label="1 vez a la semana" value="1 vez a la semana" />
        <Picker.Item label="3 veces a la semana" value="3 veces a la semana" />
        </Picker>
      )
    }
    return (
      <View style={styles.container}>
        <View style={styles.recurrenciaStl}>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                unicaVezSelected: true
              })
            }}
          >
            <Text
              style={
                this.state.unicaVezSelected
                ? styles.botonesStlVerde
                : styles.botonesStlMorado
              }>
              Servicio Única vez{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                unicaVezSelected: false
              })
            }}
            // color={btn === 2 ? '#44BE6E' : '#672D91'}
          >
            <Text
              style={
                this.state.unicaVezSelected
                ? styles.botonesStlMorado
                : styles.botonesStlVerde
              }>
              Servicio frecuente{' '}
            </Text>
          </TouchableOpacity>
        </View>
  
        <View style={styles.pickerContainer}>
          <View style={styles.col1}>
            {textRecurrencia}
            <Text style={styles.txtStl}>Día del Servicio</Text>
            <Text style={styles.txtStl}>Inicio del servicio</Text>
          </View>
          <View style={styles.col2}>
            {recurrenciaPicker}
            <MyDataPicker2 />
          </View>
        </View>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    
    borderRadius: 5,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  recurrenciaStl: {
    borderRadius: 25,
    flexDirection: 'row',
    paddingTop: 4,
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 4,
    backgroundColor: '#672D91',
  },
  botonesStlVerde: {
    //borderRadius: 50,
    marginTop: 0,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 5,
    borderRadius: 25,
    borderWidth: 1,
    color: 'white',
    backgroundColor: '#63c331',
  },
  botonesStlMorado: {
    //borderRadius: 50,
    marginTop: 0,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 5,
    borderRadius: 25,
    borderWidth: 1,
    color: 'white',
    backgroundColor: '#672D91',
  },
  recurrenciaPicker: {
    height: 20, 
    width: 145,
    marginLeft: 20,
    marginBottom: 5
  },
  stylePickerItem: {

  },
  pickerContainer: {
    flexDirection: 'row',
  },
  col1: {flexDirection: 'column', alignContent: 'center'},
  col2: {flexDirection: 'column', alignContent: 'center'},
  txtStl: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 7,
  },
  colorVerde: {backgroundColor: '#63c331'},
  colorAzul: {backgroundColor: '#44BECE'},
});

export default Recurrencia;
