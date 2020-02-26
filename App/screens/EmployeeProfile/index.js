import React from 'react';
import { View, Text, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Touchable from 'react-native-platform-touchable';
import ImageAssignedEmployee from '../../components/ImageAssignedEmployee';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Images from '../../assets/images';
import { strings } from '../../i18n';

const EmployeeProfile = props => {
  const assignedEmployee = useSelector(state => state.employee.assignedEmployee);
  const navigateBack = () => {
    props.navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Touchable style={styles.touchableContainer} onPress={navigateBack}>
        <View style={styles.backContainer}>
          <Image source={Images.whiteLeftArrow} style={styles.backImage} />
          <Text style={styles.backText}>{strings('common.back')}</Text>
        </View>
      </Touchable>
      <View style={styles.imageEmployeeContainer}>
        <ImageAssignedEmployee />
      </View>
      <View style={styles.employeeDetailsContainer}>
        <View style={styles.employeeDataContainer1}>
          <Text style={styles.employeeNameText}>{`${assignedEmployee.nombre} ${assignedEmployee.apellidos.split(' ')[0]}`}</Text>
          <Text style={styles.employeeIdText}>{`${strings('employeeFound.id')}:${assignedEmployee.cedula}`}</Text>
        </View>
        <View style={styles.employeeDataContainer2}>
          <Text style={styles.employeeDetailsText}>250</Text>
          <Text style={styles.employeeDetailsText}>
            ({assignedEmployee.calificacionPro}
            <Icon name="md-star" size={22} color="#5f2490" />)
          </Text>
          <Text style={{ ...styles.employeeDetailsText, marginRight: 55 }}>3</Text>
        </View>
        <View style={styles.employeeDataContainer3}>
          <Text style={styles.infoText}>{strings('common.services')}</Text>
          <Text style={styles.infoText}>{strings('common.rating')}</Text>
          <Text style={{ ...styles.infoText, marginRight: 40 }}>{strings('common.months')}</Text>
        </View>
        <View style={styles.listContainer}>
          <View style={styles.listItemContainer}>
            <Image source={Images.purpleCircle} style={styles.purpleCircleImage} />
            <Image source={Images.greenCheck} style={styles.checkImage} />
            <Text style={styles.listDataText}>{strings('employeeProfile.verifiedData')}</Text>
          </View>
          <View style={styles.listItemContainer}>
            <Image source={Images.purpleCircle} style={styles.purpleCircleImage} />
            <Image source={Images.greenCheck} style={styles.checkImage} />
            <Text style={styles.listDataText}>{strings('employeeProfile.verifiedAddress')}</Text>
          </View>
          <View style={styles.listItemContainer}>
            <Image source={Images.purpleCircle} style={styles.purpleCircleImage} />
            <Image source={Images.greenCheck} style={styles.checkImage} />
            <Text style={styles.listDataText}>{strings('employeeProfile.verifiedData')}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EmployeeProfile;
