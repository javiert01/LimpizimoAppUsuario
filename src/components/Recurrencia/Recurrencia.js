import React, {useState} from 'react';
import {View, Button, StyleSheet, Text, ScrollView} from 'react-native';

export default function() {
  const [btn, setCahngeColor] = useState(1);
  return (
      <View style={styles.container}>
        <View style={styles.recurrenciaStl}>
          <Button
            style={styles.botonesStl}
            title="Servicio Única vez"
            color={btn === 1 ? '#44BE6E' : '#672D91'}
            uppercase={false}
            onPress={() => {
              console.log('Ser unica vez');
              setCahngeColor(1);
            }}
          />
          <Button
            style={styles.botonesStl}
            title="Servicio frecuente"
            uppercase={false}
            color={btn === 2 ? '#44BE6E' : '#672D91'}
            onPress={() => {
              setCahngeColor(2);
              console.log('Frecuente');
            }}
          />
        </View>
        <View style={styles.pickerContainer}>
          <View style={styles.col1}>
            <Text style={styles.txtStl}>Recurrencia</Text>
            <Text style={styles.txtStl}>Día del Servicio</Text>
            <Text style={styles.txtStl}>Inicio del servicio</Text>
          </View>
          <View style={styles.col2}>
            <Text style={styles.txtStl}>Picker1</Text>
            <Text style={styles.txtStl}>Picker2</Text>
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
    borderRadius: 50,
    marginTop: 10,
    textTransform: 'lowercase',
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
