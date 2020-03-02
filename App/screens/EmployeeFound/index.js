import React from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Touchable from 'react-native-platform-touchable';
import ImageAssignedEmployee from '../../components/ImageAssignedEmployee';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { strings } from '../../i18n';
import { setIsServiceAssigned } from '../../store/actions/services';
import EStyleSheet from 'react-native-extended-stylesheet';

const EmployeeFound = props => {
  const dispatch = useDispatch();
  const assignedEmployee = useSelector(state => state.employee.assignedEmployee);

  const _navigateToServiceDetail = () => {
    props.navigation.navigate({
      routeName: 'ServiceAccepted',
      key: 'ServiceAccepted',
    });
    dispatch(setIsServiceAssigned(false));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{strings('employeeFound.message')}</Text>
      <ImageAssignedEmployee />
      <Text style={styles.titleText}>{`${assignedEmployee.nombre} ${assignedEmployee.apellidos.split(' ')[0]}`}</Text>
      <Text style={styles.text}>34 {strings('employeeFound.numberServices')}</Text>
      <View>
        <Text style={styles.text}>
          ({assignedEmployee.calificacionPro} <Icon name="md-star" size={24}  color={EStyleSheet.value('$goldColor')} />)
        </Text>
      </View>
      <View>
        <Text style={styles.text}>{`${strings('employeeFound.id')}:${assignedEmployee.cedula[0]}${assignedEmployee.cedula[1]}xxxxxx${assignedEmployee.cedula[assignedEmployee.cedula.length-2]}${assignedEmployee.cedula[assignedEmployee.cedula.length-1]}`}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Touchable style={styles.textContainer} onPress={_navigateToServiceDetail}>
          <Text style={styles.buttonText}>{strings('common.ok')}</Text>
        </Touchable>
      </View>
    </View>
  );
};

export default EmployeeFound;
