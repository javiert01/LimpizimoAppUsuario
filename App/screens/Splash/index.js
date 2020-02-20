import React from 'react';
import { StatusBar, View, Image } from 'react-native';
import Images from '../../assets/images';
import styles from './styles';

const Splash = () => (
  <View style={styles.container}>
    <StatusBar hidden={true} />
    <Image style={styles.logo} source={require('../../assets/images/Global/splashlogo.gif')}  resizeMode="contain" />
  </View>
);

export default Splash;
