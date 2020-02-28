import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';

const ServiceOption = props => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.containedIcon ? (
        <View style={styles.iconContainer}>
          <Image style={{ ...styles.icon, ...props.iconStyle }} source={props.icon} resizeMode="contain" />
        </View>
      ) : (
        <Image style={{ ...styles.icon, ...props.iconStyle }} source={props.icon} resizeMode="contain" />
      )}
      {props.creditCard ? (
        <View style={styles.creditCardInfo}>
          <Text style={styles.cardInfoText}>{props.text}</Text>
          <Text style={styles.cardInfoText}>{props.text2}</Text>
        </View>
      ) : (
        <View style={styles.normalInfo}>
          <Text style={{ ...styles.text, ...props.textStyle, marginLeft: props.containedIcon ? 6 : 12 }}>{props.text}</Text>
          {props.icon2 && props.text2 && (
            <View style={styles.secondTextContainer}>
              <Image style={styles.icon2} source={props.icon2} resizeMode="contain" />
              <Text style={{ ...styles.text, marginLeft: 6 }}>{props.text2}</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default ServiceOption;
