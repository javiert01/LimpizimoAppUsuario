import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Images from '../../assets/images';
import styles from './styles';
import { strings } from '../../i18n';

const ServiceStandby = props => {
  const isServiceAssigned = useSelector(state => state.services.isServiceAssigned);
  useEffect(() => {
    isServiceAssigned && alert('servicios asignado!');
  }, [props.isServiceAssigned]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{strings('serviceStandby.message')}</Text>
      <Image style={styles.logo} source={Images.normalCleaning} resizeMode="contain" />
    </View>
  );
};

export default ServiceStandby;
