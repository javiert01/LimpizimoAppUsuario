import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Image, Text } from 'react-native';
import Images from '../../assets/images';
import styles from './styles';

const ImageAssignedEmployee = props => {
  const imageUrlTest = 'https://limpizimov1.s3.amazonaws.com/NoBorrar/empleada1.jpg';
  //const imageUrl = useSelector(state => state.employee.imageUrl);

  return (
    <View style={styles.inputContainer}>
      <View style={styles.backgroundContainer}>
        <Image source={{ uri: imageUrlTest }} style={styles.imageUrl}></Image>
      </View>
      <Image source={Images.assignedBorder} style={styles.image}></Image>
    </View>
  );
};

export default ImageAssignedEmployee;
