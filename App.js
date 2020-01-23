import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import limpiezaNImage from './src/assets/limpiezaNormal.png';
import limpiezaPImage from './src/assets/limpiezaProfunda.png';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import TipoServicio from './src/components/TipoServicio/TipoServicio';
import Recurrencia from './src/components/Recurrencia/Recurrencia';

export default class App extends Component {
  state = {
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
        <TipoServicio tipoServicio={this.state.tipoServicios} />
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
        />
        <Recurrencia />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#672D91',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
