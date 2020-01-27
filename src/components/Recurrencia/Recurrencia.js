import React, {useState} from 'react';
//import {View, StyleSheet, Text, Button} from 'react-native';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import MyDataPicker2 from '../MyDataPicker/MyDataPicker2';

export default function() {
  const [btn, setChangeColor] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.recurrenciaStl}>
        <TouchableOpacity
          onPress={() => {
            console.log(1);
            setChangeColor(1);
          }}
          //color={btn === 1 ? '#44BE6E' : '#672D91'}
        >
          <Text
            style={
              ({backgroundColor: btn === 1 ? '#63c331' : '#672D91'},
              styles.botonesStl)
            }>
            Servicio Única vez{' '}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log(2);
            setChangeColor(2);
          }}
          // color={btn === 2 ? '#44BE6E' : '#672D91'}
        >
          <Text
            style={
              ({backgroundColor: btn === 2 ? '#63c331' : '#672D91'},
              styles.botonesStl)
            }>
            Servicio frecuente{' '}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.pickerContainer}>
        <View style={styles.col1}>
          <Text style={styles.txtStl}>Recurrencia</Text>
          <Text style={styles.txtStl}>Día del Servicio</Text>
          <Text style={styles.txtStl}>Inicio del servicio</Text>
        </View>
        <View style={styles.col2}>
          {/*
          <Text style={styles.txtStl}>Picker1</Text>
          <MyDatePicker />
           */}
          {/**
          <Text style={styles.txtStl}>Picker2</Text>
           */}
          <MyDataPicker2 />
          <Text style={styles.txtStl}>Picker3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 150,
    borderRadius: 5,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  recurrenciaStl: {
    borderRadius: 5,
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#672D91',
  },
  botonesStl: {
    //borderRadius: 50,
    marginTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 10,
    borderWidth: 1,
    color: 'white',
    backgroundColor: '#63c331',
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

// export default recurrencia;
