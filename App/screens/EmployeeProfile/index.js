import React from 'react';
import { Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Touchable from 'react-native-platform-touchable';
import ImageAssignedEmployee from '../../components/ImageAssignedEmployee';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Images from '../../assets/images';
import { strings } from '../../i18n';
import EStyleSheet from 'react-native-extended-stylesheet';
import Toast from 'react-native-simple-toast';

const EmployeeProfile = props => {
  const assignedEmployee = useSelector(state => state.employee.assignedEmployee);
  const _navigateBack = () => {
    props.navigation.goBack();
  };
  const _showToast = () => {
    Toast.showWithGravity('Los datos han sido verificados por nosotros', Toast.SHORT, Toast.CENTER)
  }

  return (
    <View style={styles.container}>
      <Touchable style={styles.touchableContainer} onPress={_navigateBack}>
        <View style={styles.backContainer}>
          <Image source={Images.whiteLeftArrow} style={styles.backImage} resizeMode="contain" />
          <Text style={styles.backText}>{strings('common.back').toLowerCase()}</Text>
        </View>
      </Touchable>
      <View style={styles.imageEmployeeContainer}>
        <ImageAssignedEmployee />
      </View>
      <View style={styles.employeeDetailsContainer}>
        <View style={styles.employeeDataContainer1}>
          <Text style={styles.employeeNameText}>{`${assignedEmployee.nombre} ${assignedEmployee.apellidos.split(' ')[0]}`}</Text>
          <Text style={styles.employeeIdText}>{`${strings('employeeFound.id')}:${assignedEmployee.cedula[0]}${assignedEmployee.cedula[1]}xxxxxx${assignedEmployee.cedula[assignedEmployee.cedula.length-2]}${assignedEmployee.cedula[assignedEmployee.cedula.length-1]}`}</Text>
        </View>
        <View style={styles.employeeDataContainer2}>
          <Text style={styles.employeeDetailsText}>250</Text>
          <Text style={styles.employeeDetailsText}>
            ({assignedEmployee.calificacionPro}
            <Icon name="md-star" size={22} color={EStyleSheet.value('$goldColor')} />)
          </Text>
          <Text style={{ ...styles.employeeDetailsText, marginRight: 20 }}>3</Text>
        </View>
        <View style={styles.employeeDataContainer3}>
          <Text style={styles.infoText}>{strings('common.services').toLowerCase()}</Text>
          <Text style={styles.infoText}>{strings('common.rating')}</Text>
          <Text style={{ ...styles.infoText, marginRight: 1 }}>{strings('common.months')}</Text>
        </View>
        <View style={styles.listContainer}>
          <View style={styles.listItemContainer}>
            <Image source={Images.purpleCircle} style={styles.purpleCircleImage} resizeMode="contain" />
            <Image source={Images.greenCheck} style={styles.checkImage} resizeMode="contain" />
            <Text style={styles.listDataText}>{strings('employeeProfile.verifiedData')}</Text>
            <Touchable onPress={_showToast}>
              <View style={styles.questionIconContainer}>
                <Image source={Images.questionIcon} style={styles.questionIcon} />
              </View>
            </Touchable>
          </View>
          <View style={styles.listItemContainer}>
            <Image source={Images.purpleCircle} style={styles.purpleCircleImage} resizeMode="contain" />
            <Image source={Images.greenCheck} style={styles.checkImage} resizeMode="contain" />
            <Text style={styles.listDataText}>{strings('employeeProfile.verifiedAddress')}</Text>
            <Touchable  onPress={_showToast}>
              <View style={styles.questionIconContainer}>
                <Image source={Images.questionIcon} style={styles.questionIcon} />
              </View>
            </Touchable>
          </View>
          <View style={styles.listItemContainer}>
            <Image source={Images.purpleCircle} style={styles.purpleCircleImage} resizeMode="contain" />
            <Image source={Images.greenCheck} style={styles.checkImage} resizeMode="contain" />
            <Text style={styles.listDataText}>{strings('employeeProfile.historyRevision')}</Text>
            <Touchable  onPress={_showToast}>
              <View style={styles.questionIconContainer}>
                <Image source={Images.questionIcon} style={styles.questionIcon} />
              </View>
            </Touchable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EmployeeProfile;
