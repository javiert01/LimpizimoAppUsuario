import React from 'react';
import {View, Button, StyleSheet, Text, ScrollView} from 'react-native';

const recurrencia = props => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.recurrenciaStl}>
          <Button
            style={styles.botonesStl}
            title="Servicio Única vez"
            color="#672D91"
            uppercase={false}
            onPress={() => {
              console.log('Ser unica vez');
            }}
          />
          <Button
            style={styles.botonesStl}
            title="Servicio frecuente"
            uppercase={false}
            color="#44BE6E"
            onPress={() => console.log('Frecuente')}
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingTop: 5,
  },
  recurrenciaStl: {
    borderRadius: 5,
    flexDirection: 'row',
    paddingTop: 5,
    paddingLeft: 7,
    paddingRight: 7,
    paddingBottom: 5,
    backgroundColor: '#672D91',
  },
  botonesStl: {
    borderRadius: 5,
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
});

export default recurrencia;
