import React, { useEffect, useState } from 'react';
import { Image, Picker, Platform, ScrollView, StatusBar, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';

import styles from './styles';

const ServiceOption = props => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.containedIcon ? (
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={props.icon} resizeMode="contain" />
        </View>
      ) : (
        <Image style={styles.icon} source={props.icon} resizeMode="contain" />
      )}
      <Text style={{ ...styles.text, marginLeft: props.containedIcon ? 8 : 16 }}>{props.text}</Text>
      {props.onButtonPress && <Touchable style={styles.button} onPress={props.onButtonPress}>
        <Text style={styles.text}>{props.buttonText}</Text>
      </Touchable>}
    </View>
  );
};

export default ServiceOption;
