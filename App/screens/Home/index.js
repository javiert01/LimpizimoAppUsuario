import React, { useState } from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import EStyleSheet from 'react-native-extended-stylesheet';
// import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

// import TipoServicio from '../../components/TipoServicio/TipoServicio';
// import BienvenidoUsuario from '../../components/BienvenidoUsuario/BienvenidoUsuario';
// import DomicilioPicker from '../../components/DomicilioPicker/DomicilioPicker';
// import HorasServicioPicker from '../../components/HorasServicioPicker/HorasServicioPicker';
// import BotonPedirServicio from '../../components/BotonPedirServicio/BotonPedirServicio';
// import Recurrencia from '../../components/Recurrencia/Recurrencia';

// import {
//   selectDomicilio,
//   selectTipoServicio,
//   selectRecurrencia,
//   selectNumeroHoras,
// } from '../../store/actions/index';

import { strings } from '../../i18n';
import Images from '../../assets/images';

import styles from './styles';

// class Home extends React.Component {
//   state = {
//     usuario: {
//       nombre: 'Javier',
//       username: 'javiert01',
//     },
//     marker: {
//       coordinate: {
//         latitude: 37.78825,
//         longitude: -122.4324,
//       },
//       title: strings('appName'),
//       description: 'Usted esta aqui',
//     },
//     tiempoServicio: 4,
//     costoServicio: 26,
//   };

//   domicilioSelectedHandler = (value, id) => {
//     this.props.onSelectDomicilio(value, id);
//   };

//   tipoServicioSelectedHandler = tipoServicio => {
//     this.props.onSelectTipoServicio(tipoServicio);
//   };

//   tipoRecurrenciaSelectedHandler = tipoRecurrencia => {
//     this.props.onSelectTipoRecurrencia(tipoRecurrencia);
//   };

//   fechaSelectedHandler = (dia, hora) => {
//     this.props.onSelectFechaServicio(dia, hora);
//   };

//   numeroHorasSelectedHandler = numeroHoras => {
//     this.props.onSelectNumeroHoras(numeroHoras);
//   };

//   calcularTiempoServicio = () => {
//     /* Logica para calcular el tiempo del servicio */
//   };

//   calcularCostoServicio = () => {
//     /* Logica para calcular el costo del servicio */
//   };

//   onEnviarServicio = () => {
//     console.log('enviando servicio...');
//     console.log(
//       'Tipo de servicio seleccionado:',
//       this.props.tipoServicioSelected,
//     );
//     console.log(
//       'Tipo recurrencia selected',
//       this.props.tipoRecurrenciaSelected,
//     );
//     console.log('Domicilio seleccionado', this.props.domicilioSelected);
//     console.log('Numero horas selected', this.props.numeroHorasSelected);
//     console.log('Dia servicio selected', this.props.diaServicioSelected);
//     console.log('Hora servicio selected', this.props.horaServicioSelected);
//     const servicioData = {
//       habilidades: '5e1c834fb329ab00047108b9',
//       usuario: '5e1cf0a2e4c4270004381ac7',
//       estado: 'Pendiente',
//       fechaInicio: '2020,01,28',
//       aux_id_domicilio: '5e10a2b818b18900044de346',
//       duracion: this.props.numeroHorasSelected,
//       costo: 100,
//       frecuencia: 1,
//       nombreSala: 'sala1',
//       horaInicio: this.props.horaServicioSelected,
//     };
//     fetch('https://limpizimo-optimus.herokuapp.com/servicio/crear', {
//       method: 'POST',
//       body: JSON.stringify(servicioData),
//     })
//       .catch(err => console.log(err))
//       .then(res => res.json())
//       .then(parsedRes => {
//         console.log(parsedRes);
//       });
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <BienvenidoUsuario usuario={this.state.usuario} />
//         <TipoServicio
//           tipoServicio={this.props.tipoServicios}
//           onTipoServicioSelected={this.tipoServicioSelectedHandler}
//         />
//         <View style={styles.formContainer}>
//           <MapView
//             provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//             style={styles.map}
//             region={{
//               latitude: -0.1832607,
//               longitude: -78.4792473,
//               latitudeDelta: 0.015,
//               longitudeDelta: 0.0121,
//             }}>
//             {/* <Marker
//           coordinate={this.state.marker.coordinate}
//           title={this.state.marker.title}
//           description={this.state.marker.description}
//         /> */}
//           </MapView>
//           <Recurrencia
//             onTipoRecurrenciaSelected={this.tipoRecurrenciaSelectedHandler}
//           />
//           <View style={styles.pickerContainer}>
//             <Text style={styles.textPregunta}>¿Dónde lo quieres?</Text>
//             <DomicilioPicker
//               domicilios={this.props.domicilios}
//               onItemSelected={this.domicilioSelectedHandler}
//               iconos={this.props.iconos}
//               iconoSelected={this.props.iconoSelected}
//               domicilioSelected={this.props.domicilioSelected}
//             />
//             <Text style={styles.textPregunta}>Horas del servicio</Text>
//             <HorasServicioPicker
//               tiempoServicio={this.state.tiempoServicio}
//               onNumeroHorasSelected={this.numeroHorasSelectedHandler}
//             />
//           </View>
//           <BotonPedirServicio
//             costoServicio={this.state.costoServicio}
//             onEnviarServicio={this.onEnviarServicio}
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     domicilios: state.services.domicilios,
//     domicilioSelected: state.services.domicilioSelected,
//     iconos: state.services.iconos,
//     iconoSelected: state.services.iconoSelected,
//     tipoServicioSelected: state.services.tipoServicioSelected,
//     tipoServicios: state.services.tipoServicios,
//     tipoRecurrenciaSelected: state.services.tipoRecurrenciaSelected,
//     diaServicioSelected: state.services.diaServicioSelected,
//     horaServicioSelected: state.services.horaServicioSelected,
//     numeroHorasSelected: state.services.numeroHorasSelected,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onSelectDomicilio: (value, id) => dispatch(selectDomicilio(value, id)),
//     onSelectTipoServicio: tipoServicio =>
//       dispatch(selectTipoServicio(tipoServicio)),
//     onSelectTipoRecurrencia: tipoRecurrencia =>
//       dispatch(selectRecurrencia(tipoRecurrencia)),
//     onSelectNumeroHoras: numeroHoras =>
//       dispatch(selectNumeroHoras(numeroHoras)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Home);

const Home = () => {
  const [isNormalCleaningOptionSelected, setIsNormalCleaningOptionSelected] = useState(false);
  const [isDeepCleaningOptionSelected, setIsDeepCleaningOptionSelected] = useState(false);
  const [isOnceOptionSelected, setIsOnceOptionSelected] = useState(true);
  const [isFrequentOptionSelected, setIsFrequentOptionSelected] = useState(false);

  const _renderNormalCleaningImage = () => (
    <Image
      style={{ ...styles.cleaningImage, transform: [{ scale: isNormalCleaningOptionSelected ? 1.3 : 1 }] }}
      source={isNormalCleaningOptionSelected ? Images.selectedNormalCleaning : Images.normalCleaning}
      resizeMode="contain"
    />
  );

  const _renderDeepCleaningImage = () => (
    <Image
      style={{ ...styles.cleaningImage, transform: [{ scale: isDeepCleaningOptionSelected ? 1.3 : 1 }] }}
      source={isDeepCleaningOptionSelected ? Images.selectedDeepCleaning : Images.deepCleaning}
      resizeMode="contain"
    />
  );

  const _renderOnceOption = () => (
    <Touchable
      style={{
        ...styles.optionContainer,
        backgroundColor: isOnceOptionSelected ? EStyleSheet.value('$secondaryColor') : 'transparent',
        width: isOnceOptionSelected ? '55%' : '45%',
      }}
      onPress={() => _toggleFrequencyOption(1)}>
      <Text style={styles.frequencyText}>{strings('common.service.once')}</Text>
    </Touchable>
  );

  const _renderFrequentOption = () => (
    <Touchable
      style={{
        ...styles.optionContainer,
        backgroundColor: isFrequentOptionSelected ? EStyleSheet.value('$secondaryColor') : 'transparent',
        width: isFrequentOptionSelected ? '55%' : '45%',
      }}
      onPress={() => _toggleFrequencyOption(2)}>
      <Text style={styles.frequencyText}>{strings('common.service.frequent')}</Text>
    </Touchable>
  );

  const _toggleCleaningOption = option => {
    if (option === 1) {
      setIsNormalCleaningOptionSelected(!isNormalCleaningOptionSelected);
      setIsDeepCleaningOptionSelected(false);
    } else {
      setIsDeepCleaningOptionSelected(!isDeepCleaningOptionSelected);
      setIsNormalCleaningOptionSelected(false);
    }
  };

  const _toggleFrequencyOption = option => {
    if (option === 1) {
      setIsOnceOptionSelected(true);
      setIsFrequentOptionSelected(false);
    } else {
      setIsFrequentOptionSelected(true);
      setIsOnceOptionSelected(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={EStyleSheet.value('$primaryColor')} barStyle="light-content" />
      <Text style={styles.greeting}>{strings('common.greeting', { name: 'Daniel' })}</Text>
      <Text style={styles.serviceQuestion}>{strings('common.serviceQuestion')}</Text>
      <Text style={styles.cleaningType}>{strings('common.cleaningType')}</Text>
      <View style={styles.cleaningOptionsContainer}>
        <Touchable onPress={() => _toggleCleaningOption(1)}>
          <View style={styles.cleaningOption}>
            {_renderNormalCleaningImage()}
            <Text style={styles.cleaningMainText}>{strings('common.cleaning.main').toUpperCase()}</Text>
            <Text style={styles.cleaningDeepText}>{strings('common.cleaning.normal').toUpperCase()}</Text>
          </View>
        </Touchable>
        <Touchable onPress={() => _toggleCleaningOption(2)}>
          <View style={styles.cleaningOption}>
            {_renderDeepCleaningImage()}
            <Text style={styles.cleaningMainText}>{strings('common.cleaning.main').toUpperCase()}</Text>
            <Text style={styles.cleaningDeepText}>{strings('common.cleaning.deep').toUpperCase()}</Text>
          </View>
        </Touchable>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.frequency}>
          {_renderOnceOption()}
          {_renderFrequentOption()}
        </View>
        {/* <View style={styles.frecuencyInfoContainer}>

        </View> */}
        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: -0.1832607,
              longitude: -78.4792473,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
