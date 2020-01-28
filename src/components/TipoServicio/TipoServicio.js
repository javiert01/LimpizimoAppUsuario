import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import limpiezaNImg from '../../assets/limpieza-normal-circulo.png';
import limpiezaPImg from '../../assets/limpieza-profunda-circulo.png';
import limpiezaNSeleccionadaImg from '../../assets/limpieza-normal-seleccionada.png';
import limpiezaPSeleccionadaImg from '../../assets/limpieza-profunda-seleccionada.png';


class TipoServicio extends Component {
  state = {
    limpiezaPSelected: false,
    limpiezaNSelected: false
  }

  renderImageLimpiezaNormal = () => {
    var imgSource = this.state.limpiezaNSelected ? limpiezaNSeleccionadaImg : limpiezaNImg;
    return (
      <Image
        style={ styles.limpiezaNImage }
        source={ imgSource }
      />
    );
  }

  renderImageLimpiezaProfunda = () => {
    var imgSource = this.state.limpiezaPSelected? limpiezaPSeleccionadaImg : limpiezaPImg;
    return (
      <Image
        style={ styles.limpiezaPImage }
        source={ imgSource }
      />
    );
  }

  render() {
    return (
      <View>
      <View style={styles.viewContainerTitulo}>
        <Text style={styles.tituloText}>¿Qué servicio necesitas?</Text>
        <Text style={styles.subtituloText}>Elige el tipo de limpieza</Text>
      </View>
      <View style={styles.viewContainer}>
        <TouchableOpacity
          onPress={() => {
            this.setState({ 
              limpiezaNSelected: !this.state.limpiezaNSelected,
              limpiezaPSelected: false
            }) 
          }}>
          {this.renderImageLimpiezaNormal()}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setState({ 
              limpiezaPSelected: !this.state.limpiezaPSelected,
              limpiezaNSelected: false 
            }) 
          }}>
          {this.renderImageLimpiezaProfunda()}
        </TouchableOpacity>
      </View>
      <View style={styles.viewContainer}>
        <Text style={styles.descripcionText}>
          {this.props.tipoServicio[0].descripcion}
        </Text>
        <Text style={styles.descripcionText}>
          {this.props.tipoServicio[1].descripcion}
        </Text>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#672D91',
  },
  viewContainerTitulo: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#672D91',
  },
  limpiezaNImage: {
    height: 90,
    width: 90,
    marginRight: 30,
    marginLeft: 10
    //padding: 40,
    //backgroundColor: '#756984',
  },
  limpiezaPImage: {
    marginLeft: 0,
    height: 90,
    width: 90,
    //padding: 40,
  },
  tituloText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    padding: 1
  },
  subtituloText: {
    color: 'white',
    paddingBottom: 10,
  },
  descripcionText: {
    color: 'white',
    padding: 5,
    marginRight: 10,
  },
});

export default TipoServicio;
