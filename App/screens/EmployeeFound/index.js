import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import ImageAssignedEmployee from '../../components/ImageAssignedEmployee';
import styles from './styles';
import { strings } from '../../i18n';

const EmployeeFound = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloText}>{strings('employeeFound.message')}</Text>
      <ImageAssignedEmployee />
      <Text style={styles.tituloText}>Nombre empleada</Text>
      <Text style={styles.text}>34 {strings('employeeFound.numberServices')}</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text>OK -></Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmployeeFound;
