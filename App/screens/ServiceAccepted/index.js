import React, { useEffect, useState } from 'react';
import { BackHandler, Image, Linking, Platform, Text, View } from 'react-native';
import CancelService  from '../../modals/CancelService';
import FastImage from 'react-native-fast-image';
import Touchable from 'react-native-platform-touchable';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useSelector } from 'react-redux';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import ServiceOption from '../../components/ServiceAccepted/ServiceOption';

import { strings } from '../../i18n';
import Images from '../../assets/images';
import styles from './styles';

const ServiceAccepted = props => {
  const service = useSelector(state => state.services.requestedService);
  const assignedEmployee = useSelector(state => state.employee.assignedEmployee);
  const [isCancelingService, setIsCancelingService] = useState(false);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', _handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', _handleBackButton);
    };
  }, []);

  const _handleBackButton = () => {
    console.log('xxx', 'Back button is pressed');
    return true;
  };

  const employee = {
    name: 'Sarah Potter',
    servicesAmount: 55,
    imageURL: 'https://en.mzadqatar.com/uploads/images/2019/11/07/316400-1kkccwg4skampy4.jpg',
    rating: 4.89,
    phoneNumber: '+593997740959',
  };

  const _onUpArrowPress = () => {
    console.log('xxxUpArrowPressed');
  };

  const _onCancelButtonPress = () => {
    setIsCancelingService(true);
  };

  const _onCloseModal = () => {
    setIsCancelingService(false);
  }

  const _onOKButtonPress = () => {
    props.navigation.popToTop();
  };

  const _onPhoneImagePress = () => {
    const phoneNumber = Platform.OS === 'ios' ? `telprompt:\${${assignedEmployee.telefono}}` : `tel:\${${assignedEmployee.telefono}}`;
    Linking.openURL(phoneNumber);
  };

  const _onSeeProfilePress = () => {
    console.log('xxxSeeProfilePressed');
  };

  return (
    <View style={styles.bigContainer}>
      <CancelService visible={isCancelingService} onCloseModal={_onCloseModal} onCancelServicePressed={_onOKButtonPress}/>
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: -0.1832607 - 0.006,
            longitude: -78.4792473 - 0.004,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          moveOnMarkerPress={false}
          zoomEnabled={false}
          rotateEnabled={false}
          scrollEnabled={false}>
          <Marker coordinate={{ latitude: -0.1832607, longitude: -78.4792473 }} image={require('../../assets/images/Global/mapa.png')}>
            <Callout>
              <View style={{ width: 150, height: 50 }}>
                <ServiceOption
                  containedIcon={true}
                  style={{ marginLeft: 0, marginVertical: 2 }}
                  iconStyle = {{width: 15, height: 15}}
                  icon={Images.clock}
                  text={service.time}
                  textStyle={{ color: EStyleSheet.value('$primaryColor'), fontSize: 9 }}
                />
                <ServiceOption
                  icon={Images.calendar}
                  text={service.date}
                  style={{ marginLeft: 0, marginVertical: 2 }}
                  iconStyle = {{width: 15, height: 15}}
                  textStyle={{ color: EStyleSheet.value('$primaryColor'), fontSize: 9  }}
                />
              </View>
            </Callout>
          </Marker>
        </MapView>
      </View>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.titleTopPart}>
            <Text style={styles.title}>{strings('serviceAccepted.service').toUpperCase()}</Text>
            <Text style={styles.subtitle}>{strings('serviceAccepted.accepted').toUpperCase()}</Text>
          </View>
          <View style={styles.titleBottomPart}>
            <Image style={styles.logo} source={Images.purpleLogo} resizeMode="contain" />
          </View>
        </View>
        <View style={styles.serviceDetailsContainer}>
          <Touchable style={styles.upArrowContainer} onPress={_onUpArrowPress}>
            <View></View>
          </Touchable>
          <Text style={styles.serviceDetailsText}>{strings('serviceAccepted.serviceDetails')}</Text>
          {/* <Image style={styles.downArrowV2} source={Images.whiteDownArrowV2} resizeMode="contain" /> */}
          <View style={styles.lineSeparator} />
          <ServiceOption
            containedIcon={true}
            icon={service.selectedPlace.id === 0 ? Images.office : service.selectedPlace.id === 1 ? Images.house : Images.otherPlace}
            text={service.selectedPlace.callePrincipal}
          />
          <View style={styles.lineSeparator} />
          <ServiceOption icon={Images.calendar} iconStyle={{ tintColor: EStyleSheet.value('$mainColorLight') }} text={service.date} />
          <View style={styles.lineSeparator} />
          <ServiceOption containedIcon={true} icon={Images.clock} text={service.time} />
          <View style={styles.lineSeparator} />
          <ServiceOption
            icon={service.cleaningOption === strings('common.cleaning.normal') ? Images.normalCleaning : Images.deepCleaning}
            text={`${strings('common.cleaning.main')} ${service.cleaningOption.toLowerCase()}`}
          />
          <View style={styles.lineSeparator} />
          <ServiceOption icon={Images.service} text={service.frequency} />
          <View style={styles.lineSeparator} />
          <ServiceOption
            creditCard
            icon={Images.user}
            text={`$ ${service.calculatedPrice}`}
            text2={`${service.selectedCard.name} ${service.selectedCard.number.substr(12)}`}
          />
          <View style={styles.lineSeparator} />
          <View style={styles.employee}>
            <View style={styles.employeeImageContainer}>
              <Image style={styles.employeeBorderImage} source={Images.assignedBorder} resizeMode="contain" />
              <FastImage style={styles.employeeImage} source={{ uri: assignedEmployee.imagenPerfil }} resizeMode={FastImage.resizeMode.cover} />
            </View>
            <View style={styles.employeeInfoContainer}>
              <View>
                <Text style={styles.employeeName}>{`${assignedEmployee.nombre} ${assignedEmployee.apellidos.split(' ')[0]}`}</Text>
                <Text style={styles.employeeServicesAmount}>{strings('serviceAccepted.servicesPerformed', { amount: employee.servicesAmount })}</Text>
              </View>
              <Text style={styles.employeeRating}>
                {`(${assignedEmployee.calificacionPro} `}
                <Text style={styles.star}>{'\u2605'}</Text>)
              </Text>
            </View>
            <Touchable style={styles.phoneImageContainer} onPress={_onPhoneImagePress}>
              <Image style={styles.phoneImage} source={Images.phone} resizeMode="contain" />
            </Touchable>
          </View>
          <Touchable onPress={_onSeeProfilePress}>
            <View style={styles.seeProfileContainer}>
              <Text style={styles.seeProfileText}>{strings('serviceAccepted.seeProfile')}</Text>
              <Image style={styles.seeProfileImage} source={Images.whiteRightArrowV2} resizeMode="contain" />
            </View>
          </Touchable>
          <View style={styles.bottomButtonsContainer}>
            <Touchable style={styles.cancelButton} onPress={_onCancelButtonPress}>
              <Text style={styles.buttonText}>{strings('common.cancel')}</Text>
            </Touchable>
            <Touchable style={styles.okButton} onPress={_onOKButtonPress}>
              <Text style={styles.buttonText}>{strings('common.ok')}</Text>
            </Touchable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ServiceAccepted;
