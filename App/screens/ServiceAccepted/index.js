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
  const _onUpArrowPress = () => {
    console.log('xxxUpArrowPressed');
  };

  const _onOptionButtonPress = () => {

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
        <ServiceOption style={{borderColor: 'black', borderWidth: 1}} containedIcon={true} icon={Images.office} text={'dasdasds'} />
      </View>
    </View>
  );
};

export default ServiceAccepted;
