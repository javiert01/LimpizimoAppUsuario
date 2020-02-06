import React, { useState }from 'react';
import { connect } from 'react-redux';
import { View, Image, Text } from 'react-native';
import Images from '../../assets/images';
import styles from './styles';
import { strings } from '../../i18n';

class ServiceStandby extends React.Component {
    state = {
        title: strings('serviceStandby.message')
    }
    render() {
        if(this.props.isServiceAssigned) {
            console.log('servicio asignado');
            alert('servicios asignado!');
        }
        return(
        <View style={styles.container}>
            <Text style={styles.text}>{this.state.title}</Text>
            <Image style={styles.logo} source={Images.normalCleaning} resizeMode="contain" />
        </View>
        );
    };
    
};

const mapStateToProps = state => {
    return {
      isServiceAssigned: state.services.isServiceAssigned
    };
};


export default connect(mapStateToProps)(ServiceStandby);