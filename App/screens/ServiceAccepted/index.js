import React, { useEffect } from 'react';
import { BackHandler, Image, Linking, Platform, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Touchable from 'react-native-platform-touchable';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useSelector } from 'react-redux';

import ServiceOption from '../../components/ServiceAccepted/ServiceOption';

import { strings } from '../../i18n';
import Images from '../../assets/images';
import styles from './styles';

const ServiceAccepted = props => {
  const service = useSelector(state => state.services.requestedService);

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
    props.navigation.popToTop();
  };

  const _onOKButtonPress = () => {
    props.navigation.popToTop();
  };

  const _onPhoneImagePress = () => {
    const phoneNumber = Platform.OS === 'ios' ? `telprompt:\${${employee.phoneNumber}}` : `tel:\${${employee.phoneNumber}}`;
    Linking.openURL(phoneNumber);
  };

  const _onSeeProfilePress = () => {
    props.navigation.navigate({
      routeName: 'EmployeeProfile',
      key: 'EmployeeProfile',
    });
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
        <View style={styles.employee}>
          <View style={styles.employeeImageContainer}>
            <Image style={styles.employeeBorderImage} source={Images.assignedBorder} resizeMode="contain" />
            <FastImage style={styles.employeeImage} source={{ uri: employee.imageURL }} resizeMode={FastImage.resizeMode.contain} />
          </View>
          <View style={styles.employeeInfoContainer}>
            <View>
              <Text style={styles.employeeName}>{employee.name}</Text>
              <Text style={styles.employeeServicesAmount}>{strings('serviceAccepted.servicesPerformed', { amount: employee.servicesAmount })}</Text>
            </View>
            <Text style={styles.employeeRating}>
              {`(${employee.rating} `}
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
