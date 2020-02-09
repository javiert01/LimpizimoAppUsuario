import React from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity, Text } from 'react-native';
import  ImageAssignedEmployee from'../../components/ImageAssignedEmployee';
import styles from './styles';
import { strings } from '../../i18n';

class EmployeeFound extends React.Component {
    state = {
        title: strings('employeeFound.message'),
        numberServicesText: strings('employeeFound.numberServices')
    }
    render() {
        return(
        <View style={styles.container}>
            <Text style={styles.tituloText}>{this.state.title}</Text>
            <ImageAssignedEmployee />
            <Text style={styles.tituloText}>Nombre empleada</Text>
            <Text style={styles.text}>34 {this.state.numberServicesText}</Text>
            <TouchableOpacity
            onPress={() => {
            }}>
            <Text>
              OK ->
            </Text>
          </TouchableOpacity>
        </View>
        );
    };
    
};

const mapStateToProps = state => {
    return {
      isServiceAssigned: state.services.isServiceAssigned
    };
};


export default connect(mapStateToProps)(EmployeeFound);