import React, { useEffect, useState } from 'react';
import { Image, Picker, Platform, ScrollView, StatusBar, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import EStyleSheet from 'react-native-extended-stylesheet';
import DateTimePicker from '@react-native-community/datetimepicker';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useSelector, useDispatch } from 'react-redux';
import { DateTime } from 'luxon';

import ServiceOption from '../../components/ServiceAccepted/ServiceOption';

import { strings } from '../../i18n';
import Images from '../../assets/images';
import CONSTANTS from '../../constants';
import styles from './styles';

const ServiceAccepted = props => {
  const service = useSelector(state => state.services.requestedService);

  const _onUpArrowPress = () => {
    console.log('xxxUpArrowPressed');
  };

  const _onCancelButtonPress = () => {
    props.navigation.popToTop();
  };

  const _onOKButtonPress = () => {
    props.navigation.popToTop();
  };

  return (
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
          <Image style={styles.upArrow} source={Images.whiteUpArrow} resizeMode="contain" />
        </Touchable>
        <Text style={styles.serviceDetailsText}>{strings('serviceAccepted.serviceDetails')}</Text>
        <Image style={styles.downArrowV2} source={Images.whiteDownArrowV2} resizeMode="contain" />
        <View style={styles.lineSeparator} />
        <ServiceOption
          containedIcon={true}
          icon={service.selectedPlace.id === 0 ? Images.office : service.selectedPlace.id === 1 ? Images.house : Images.otherPlace}
          text={service.selectedPlace.callePrincipal}
        />
        <View style={styles.lineSeparator} />
        <ServiceOption
          icon={Images.calendar}
          iconStyle={{ tintColor: EStyleSheet.value('$mainColorLight') }}
          text={service.date}
          icon2={Images.clock}
          text2={service.time}
        />
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
        <View style={styles.bottomButtonsContainer}>
          <Touchable style={styles.button} onPress={_onCancelButtonPress}>
            <Text style={styles.cancelButtonText}>{strings('common.cancel')}</Text>
          </Touchable>
          <Touchable style={styles.button} onPress={_onOKButtonPress}>
            <Text style={styles.okButtonText}>{strings('common.ok')}</Text>
          </Touchable>
        </View>
      </View>
    </View>
  );
};

export default ServiceAccepted;
