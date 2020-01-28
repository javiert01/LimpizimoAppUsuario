import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, ScrollView} from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import limpiezaNImage from './src/assets/limpieza-normal-circulo.png';
import limpiezaPImage from './src/assets/limpieza-profunda-circulo.png';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import TipoServicio from './src/components/TipoServicio/TipoServicio';
import BienvenidoUsuario from './src/components/BienvenidoUsuario/BienvenidoUsuario';
import DomicilioPicker from './src/components/DomicilioPicker/DomicilioPicker';
import HorasServicioPicker from './src/components/HorasServicioPicker/HorasServicioPicker';
import edificioPickerImage from './src/assets/icono-edificio-morado.png';
import casaPickerImage from './src/assets/icono-casa-morado.png';
import otrosPickerImage from './src/assets/icono-otros-morado.png';
import BotonPedirServicio from './src/components/BotonPedirServicio/BotonPedirServicio'

import Recurrencia from './src/components/Recurrencia/Recurrencia';

export default class App extends Component {
  state = {
    usuario: {
      nombre: 'Javier',
      username: 'javiert01',
    },
    iconos: [
      {
        tipoDomicilio: 'Trabajo',
        image: edificioPickerImage,
      },
      {
        tipoDomicilio: 'Casa',
        image: casaPickerImage
      },
      {
        tipoDomicilio: 'Otro',
        image: otrosPickerImage
      }
    ],
    iconoSelected: {
      tipoDomicilio: 'Trabajo',
      image: edificioPickerImage
    },
    domicilios: [
      {
        id: 0,
        tipoDomicilio: 'Trabajo',
        callePrincipal: 'Catalina Aldaz',
        ciudad: 'Quito',
      },
      {
        id: 1,
        tipoDomicilio: 'Casa',
        callePrincipal: 'Luis Tufino',
        ciudad: 'Quito',
      },
      {
        id: 2,
        tipoDomicilio: 'Otro',
        callePrincipal: 'Santa Lucia',
        ciudad: 'Quito',
      },
    ],
    tiempoServicio: 4,
    costoServicio: 26,
    domicilioSelected: {
      id: 0,
      tipoDomicilio: 'Trabajo',
      callePrincipal: 'Catalina Aldaz',
      ciudad: 'Quito',
    },
    places: [],
    tipoServicios: [
      {
        descripcion: 'Limpieza Normal',
        image: limpiezaNImage,
      },
      {
        descripcion: 'Limpieza Profunda',
        image: limpiezaPImage,
      },
    ],
    selectedPlace: null,
  };
  
  domicilioSelectedHandler = (value ,id) => {
    this.setState(prevState => {
      return {
        domicilioSelected: prevState.domicilios.find(domicilio => {
          return domicilio.id === id;
        }),
        iconoSelected: prevState.iconos.find(icono =>{
          return icono.tipoDomicilio === value
        })
      };
    });
  };

  calcularTiempoServicio = () => {
    /* Logica para calcular el tiempo del servicio */
  }

  calcularCostoServicio = () => {
    /* Logica para calcular el costo del servicio */
  }

  onEnviarServicio = () => {
    console.log('enviando servicio...');
      const servicioData = {
        habilidades: '5e1c834fb329ab00047108b9',
        usuario: '5e1cf0a2e4c4270004381ac7',
        estado: 'Pendiente',
        fechaInicio: '2020,01,28',
        aux_id_domicilio: '5e10a2b818b18900044de346',
        duracion: 3,
        costo: 100,
        frecuencia: 1,
        nombreSala: 'sala1',
        horaInicio: '10:00'
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

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null,
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <BienvenidoUsuario usuario={this.state.usuario} />
        <TipoServicio tipoServicio={this.state.tipoServicios} />
        <ScrollView>
        <View style={styles.formContainer}>
          <Recurrencia />
          <Text style={styles.textPregunta}>¿Dónde lo quieres?</Text>
          <DomicilioPicker 
          domicilios={this.state.domicilios}
          onItemSelected={this.domicilioSelectedHandler}
          iconos = {this.state.iconos}
          iconoSelected = {this.state.iconoSelected}
          domicilioSelected = {this.state.domicilioSelected}/>
          <Text style={styles.textPregunta}>Horas del servicio</Text>
        <HorasServicioPicker tiempoServicio={this.state.tiempoServicio} />
        <BotonPedirServicio costoServicio={this.state.costoServicio} onEnviarServicio={this.onEnviarServicio}/>
        </View>
        </ScrollView>

        {/* <PlaceDetail selectedPlace={this.state.selectedPlace}
        onItemDeleted={this.placeDeletedHandler}
        onModalClosed={this.modalClosedHandler}/>

          <DomicilioPicker
            domicilios={this.state.domicilios}
            onItemSelected={this.domicilioSelectedHandler}
            iconos={this.state.iconos}
            domicilioSelected={this.state.domicilioSelected}
          />
        </View>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />


        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
        /> */}
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
  contentContainer: {
    alignItems: 'flex-start',
    width: '100%',
    flex: 1,
    paddingTop: 5,
    backgroundColor: 'white'
  },
  formContainer: {
    width: '100%',
    //flex: 1,
    height: 500,
    paddingTop: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textPregunta: {
    color: 'grey',
    margin: 5
  }
});
