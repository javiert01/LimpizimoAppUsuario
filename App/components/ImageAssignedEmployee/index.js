import React from 'react';
import { useSelector} from 'react-redux';
import { View, Image} from 'react-native';
import Images from '../../assets/images';
import styles from './styles';

const ImageAssignedEmployee = props => {
  const imageUrl = useSelector(state => state.employee.assignedEmployee.imagenPerfil);
  return (
    <View style={styles.inputContainer}>
      <View style={styles.backgroundContainer}>
        <Image source={{ uri: imageUrl }} style={styles.imageUrl}></Image>
      </View>
      <Image source={Images.assignedBorder} style={styles.image}></Image>
    </View>
  );
};

export default ImageAssignedEmployee;
