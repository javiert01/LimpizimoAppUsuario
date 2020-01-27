// Está es la útlima versión
// LEER LA DOCUMENTACION POR SI SALE ALGUN ERROR
// https://github.com/react-native-community/react-native-datetimepicker
import React, {Component} from 'react';
import {
  View,
  Button,
  Platform,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class App extends Component {
  state = {
    date: new Date('2020-06-12T14:42:42'),
    mode: 'date',
    show: false,
  };

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  };

  show = mode => {
    this.setState({
      show: true,
      mode,
    });
  };

  datepicker = () => {
    this.show('date');
  };

  timepicker = () => {
    this.show('time');
  };

  render() {
    const {show, date, mode} = this.state;

    return (
      <View>
        <View>
          {/*
          <Button onPress={this.datepicker} title="Show date picker!" />
           */}
          <TouchableOpacity onPress={this.datepicker}>
            <Image
              style={styles.buttonImg}
              source={require('../../assets/calendario.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          {/*
          <Button onPress={this.timepicker} title="Show time picker!" />
             */}
          <TouchableOpacity onPress={this.timepicker}>
            <Image
              style={styles.buttonImg}
              source={require('../../assets/reloj.png')}
            />
          </TouchableOpacity>
        </View>
        {show && (
          <DateTimePicker
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={this.setDate}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonImg: {
    width: 25,
    height: 21,
    justifyContent: 'center',
  },
});
