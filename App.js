import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import MapView, {PROVIDER_GOOGLE, Marker}from 'react-native-maps';


import TipoServicio from './src/components/TipoServicio/TipoServicio';
import BienvenidoUsuario from './src/components/BienvenidoUsuario/BienvenidoUsuario';
import DomicilioPicker from './src/components/DomicilioPicker/DomicilioPicker';
import HorasServicioPicker from './src/components/HorasServicioPicker/HorasServicioPicker';
import BotonPedirServicio from './src/components/BotonPedirServicio/BotonPedirServicio'
import Recurrencia from './src/components/Recurrencia/Recurrencia';

import { selectDomicilio,
          selectTipoServicio,
          selectRecurrencia,
          selectNumeroHoras
       } from './src/store/actions/index';

class App extends Component {
  state = {
    usuario: {
      nombre: 'Javier',
      username: 'javiert01',
    },
    marker: {
      coordinate: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
      title: 'Limpizimo',
      description: 'Usted esta aqui' 
    },
    tiempoServicio: 4,
    costoServicio: 26
  };
  
  domicilioSelectedHandler = (value ,id) => {
    this.props.onSelectDomicilio(value, id);
  };

  tipoServicioSelectedHandler = (tipoServicio) => {
    this.props.onSelectTipoServicio(tipoServicio);
  }

  tipoRecurrenciaSelectedHandler = (tipoRecurrencia) => {
    this.props.onSelectTipoRecurrencia(tipoRecurrencia);
  }

  fechaSelectedHandler = (dia, hora) => {
    this.props.onSelectFechaServicio(dia, hora);
  }

  numeroHorasSelectedHandler = (numeroHoras) => {
    this.props.onSelectNumeroHoras(numeroHoras);
  }

  calcularTiempoServicio = () => {
    /* Logica para calcular el tiempo del servicio */
  }

  calcularCostoServicio = () => {
    /* Logica para calcular el costo del servicio */
  }

  onEnviarServicio = () => {
    console.log('enviando servicio...');
    console.log('Tipo de servicio seleccionado:', this.props.tipoServicioSelected);
    console.log('Tipo recurrencia selected', this.props.tipoRecurrenciaSelected);
    console.log('Domicilio seleccionado',this.props.domicilioSelected );
    console.log('Numero horas selected', this.props.numeroHorasSelected);
    console.log('Dia servicio selected', this.props.diaServicioSelected);
    console.log('Hora servicio selected', this.props.horaServicioSelected);
      const servicioData = {
        habilidades: '5e1c834fb329ab00047108b9',
        usuario: '5e1cf0a2e4c4270004381ac7',
        estado: 'Pendiente',
        fechaInicio: '2020,01,28',
        aux_id_domicilio: '5e10a2b818b18900044de346',
        duracion: this.props.numeroHorasSelected,
        costo: 100,
        frecuencia: 1,
        nombreSala: 'sala1',
        horaInicio: this.props.horaServicioSelected
      };
      fetch('https://limpizimo-optimus.herokuapp.com/servicio/crear',{
        method: 'POST',
        body: JSON.stringify(servicioData)
      })
      .catch(err => console.log(err))
      .then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <BienvenidoUsuario usuario={this.state.usuario} />
        <TipoServicio tipoServicio={this.props.tipoServicios} onTipoServicioSelected={this.tipoServicioSelectedHandler}/>
        <View style={styles.formContainer}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: -0.1832607,
            longitude: -78.4792473,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          {/* <Marker
          coordinate={this.state.marker.coordinate}
          title={this.state.marker.title}
          description={this.state.marker.description}
        /> */}
        </MapView>
          <Recurrencia onTipoRecurrenciaSelected={this.tipoRecurrenciaSelectedHandler}/>
          <View style={styles.pickerContainer}>
          <Text style={styles.textPregunta}>¿Dónde lo quieres?</Text>
          <DomicilioPicker 
          domicilios={this.props.domicilios}
          onItemSelected={this.domicilioSelectedHandler}
          iconos = {this.props.iconos}
          iconoSelected = {this.props.iconoSelected}
          domicilioSelected = {this.props.domicilioSelected}/>
          <Text style={styles.textPregunta}>Horas del servicio</Text>
        <HorasServicioPicker tiempoServicio={this.state.tiempoServicio} 
        onNumeroHorasSelected={this.numeroHorasSelectedHandler}/>
        </View>
        <BotonPedirServicio costoServicio={this.state.costoServicio} onEnviarServicio={this.onEnviarServicio}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //height: 1900,
    paddingTop: 5,
    backgroundColor: '#672D91',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contentContainer: {
    alignItems: 'flex-start',
    width: '100%',
    flex: 1,
    paddingTop: 5,
    backgroundColor: 'white'
  },
  formContainer: {
    width: 350,
    //flex: 1,
    height: 500,
    paddingTop: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  pickerContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: 5,
    paddingLeft: 24,
    paddingRight: 24
  },
  textPregunta: {
    color: 'grey',
    margin: 3
  }
});

const mapStateToProps = state => {
  return {
    domicilios: state.servicios.domicilios,
    domicilioSelected: state.servicios.domicilioSelected,
    iconos: state.servicios.iconos,
    iconoSelected: state.servicios.iconoSelected,
    tipoServicioSelected: state.servicios.tipoServicioSelected,
    tipoServicios: state.servicios.tipoServicios,
    tipoRecurrenciaSelected: state.servicios.tipoRecurrenciaSelected,
    diaServicioSelected: state.servicios.diaServicioSelected,
    horaServicioSelected: state.servicios.horaServicioSelected,
    numeroHorasSelected: state.servicios.numeroHorasSelected

  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectDomicilio: (value, id) => dispatch(selectDomicilio(value, id)),
    onSelectTipoServicio: (tipoServicio) => dispatch(selectTipoServicio(tipoServicio)),
    onSelectTipoRecurrencia: (tipoRecurrencia) => dispatch(selectRecurrencia(tipoRecurrencia)),
    onSelectNumeroHoras: (numeroHoras) => dispatch(selectNumeroHoras(numeroHoras))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

