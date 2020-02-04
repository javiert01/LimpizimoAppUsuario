import React, { useState }from 'react';
import { View, Image, Text } from 'react-native';
import Images from '../../assets/images';
import styles from './styles';
import { strings } from '../../i18n';

const ServiceStandby = () => {
    
    const [title, setTitle] = useState(strings('serviceStandby.message'));
    return(
    <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <Image style={styles.logo} source={Images.normalCleaning} resizeMode="contain" />
    </View>
    );
};
  

export default ServiceStandby;