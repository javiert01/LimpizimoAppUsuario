import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import { strings } from '../../i18n';

const ServiceStandby = props => {
  const isServiceAssigned = useSelector(state => state.services.isServiceAssigned);
  useEffect(() => {
    if (isServiceAssigned) {
      props.navigation.navigate({
        routeName: 'EmployeeFound',
        key: 'EmployeeFound',
      });
    }
  }, [isServiceAssigned]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{strings('serviceStandby.message')}</Text>
      <Image style={styles.logo} source={require('../../assets/images/Global/escoba2.gif')}   resizeMode="contain" />
    </View>
  );
};

export default ServiceStandby;
