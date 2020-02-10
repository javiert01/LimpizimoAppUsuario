import React from 'react';
import { View, Text } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import ImageAssignedEmployee from '../../components/ImageAssignedEmployee';
import styles from './styles';
import { strings } from '../../i18n';

const EmployeeFound = props => {
  const _navigateToServiceDetail = () => {
    props.navigation.navigate({
      routeName: 'Home',
      key: 'Home', 
    });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{strings('employeeFound.message')}</Text>
      <ImageAssignedEmployee />
      <Text style={styles.titleText}>Nombre empleada</Text>
      <Text style={styles.text}>34 {strings('employeeFound.numberServices')}</Text>
      <View style={styles.buttonContainer}>
        <Touchable style={styles.textContainer} onPress={_navigateToServiceDetail()}>
          <Text style={styles.buttonText}>{strings('common.ok')}</Text>
        </Touchable>
      </View>
    </View>
  );
};

export default EmployeeFound;
