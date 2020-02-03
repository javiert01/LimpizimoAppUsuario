import React from 'react';
import { View, Image } from 'react-native';
import Images from '../../assets/images';
import styles from './styles';

const Splash = () => (
  <View style={styles.container}>
    <Image style={styles.logo} source={Images.logo} resizeMode="contain" />
  </View>
);

export default Splash;
