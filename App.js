import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import limpiezaNImage from './src/assets/limpieza-normal-circulo.png';
import limpiezaPImage from './src/assets/limpieza-profunda-circulo.png';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import TipoServicio from './src/components/TipoServicio/TipoServicio';
import BienvenidoUsuario from './src/components/BienvenidoUsuario/BienvenidoUsuario';
import DomicilioPicker from './src/components/DomicilioPicker/DomicilioPicker';
import edificioPickerImage from './src/assets/icono-edificio-morado.png';
import Recurrencia from './src/components/Recurrencia/Recurrencia';

export default class App extends Component {
  state = {
    usuario: {
      nombre: 'Javier',
      username: 'javiert01',
    },
    iconos: [
      {
        image: edificioPickerImage,
      },
    ],
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

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: limpiezaNImage,
        }),
      };
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        }),
      };
    });
  };

  domicilioSelectedHandler = id => {
    console.log('domicilio selected handler', id);
    this.setState(prevState => {
      return {
        domicilioSelected: prevState.domicilios.find(domicilio => {
          return domicilio.id === id;
        }),
      };
    });
  };


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
        <View style={styles.formContainer}>

          <Recurrencia />
          <Text style={styles.textPregunta}>¿Dónde lo quieres?</Text>
          <DomicilioPicker 
          domicilios={this.state.domicilios}
          onItemSelected={this.domicilioSelectedHandler}
          iconos = {this.state.iconos}
          domicilioSelected = {this.state.domicilioSelected}/>
        </View>

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
    paddingTop: 5,
    backgroundColor: '#672D91',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  formContainer: {
    //flex: 1,
    width: '100%',
    flex: 1,
    paddingTop: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textPregunta: {
    color: 'grey'
  }
});
