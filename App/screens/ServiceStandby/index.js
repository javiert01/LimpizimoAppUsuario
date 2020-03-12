import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';
import { strings } from '../../i18n';
import Images from '../../assets/images';
import CONSTANTS from '../../constants';
import useInterval from '../../customHooks/useInterval';
import KeepWaitingService from '../../modals/KeepWatingService';
import { updateServiceStatusSocket } from '../../store/actions/webSockets';

const ServiceStandby = props => {
  const isServiceAssigned = useSelector(state => state.services.isServiceAssigned);
  const [delay, setDelay] = useState(CONSTANTS.WAITING_TIME);
  const [isTimeOver, setIsTimeOver] = useState(false);
  const serviceId = useSelector(state => state.services.askForService.idService);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isServiceAssigned) {
      setDelay(null);
      setIsTimeOver(false);
      props.navigation.navigate({
        routeName: 'EmployeeFound',
        key: 'EmployeeFound',
      });
    }
  }, [isServiceAssigned]);

  useInterval(() => {
    _openModal();
  }, delay);

  const _openModal = () => {
    setIsTimeOver(true);
    setDelay(null);
  };

  const _onCloseModal = () => {
    setIsTimeOver(false);
    setDelay(CONSTANTS.WAITING_TIME);
  };

  const _onRequestServiceAgainPressed = () => {
    dispatch(updateServiceStatusSocket('sala1', 'update-service', serviceId, 'Cancelado', strings('cancelReasons.waitingTime')));
    props.navigation.pop();
  };

  return (
    <View style={styles.container}>
      <KeepWaitingService visible={isTimeOver} onCloseModal={_onCloseModal} onRequestServiceAgainPressed={_onRequestServiceAgainPressed} />
      <Text style={styles.text}>{strings('serviceStandby.message')}</Text>
      <Image style={styles.logo} source={Images.animatedBroom} resizeMode="contain" />
    </View>
  );
};

export default ServiceStandby;
