// Está es la útlima versión
// LEER LA DOCUMENTACION POR SI SALE ALGUN ERROR
// https://github.com/react-native-community/react-native-datetimepicker
import React, {Component} from 'react';
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class App extends Component {
  state = {
    date: new Date(),
    hora: new Date(),
    mode: 'date',
    show: false,
  };

  setValuePicker = (event, date) => {
    if(this.state.mode === 'date') {
      this.setDate(event, date);
    }else {
      this.setHora(event,date);
    }
  }

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  };

  setHora = (event, hora) => {
    hora = hora || this.state.hora;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      hora,
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

  parseDate = (fecha) => {
      const dia = fecha.getDate();
      let diaString = '';
      const anio = fecha.getFullYear();
      const month = fecha.getMonth() + 1;
      let monthString = '';
      if (dia < 10) {
        diaString = '0' + dia.toString();
      } else {
        diaString = dia.toString();
      }
      if (month < 10) {
        monthString = '0' + month.toString();
      } else {
        monthString = month.toString();
      }
      return diaString + '/' + monthString + '/' + anio;
  }

  parseTime = (fecha) => {
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    let minutosString = minutos.toString();
    if(minutos < 10) {
      minutosString = '0' + minutos.toString();
    }
    return hora.toString() + ':' +minutosString;
  }

  render() {
    const {show, date, mode} = this.state;

    return (
      <View>
        <View style={styles.horizontalView}>
          {/*
          <Button onPress={this.datepicker} title="Show date picker!" />
           */}
          <TouchableOpacity onPress={this.datepicker}>
            <Image
              style={styles.buttonImg}
              source={require('../../assets/calendario.png')}
            />
          </TouchableOpacity>
          <Text style={styles.textFecha}>{this.parseDate(this.state.date)}</Text>
        </View>
        <View style={styles.horizontalView}>
          <TouchableOpacity onPress={this.timepicker}>
            <Image
              style={styles.buttonImg}
              source={require('../../assets/reloj.png')}
            />
          </TouchableOpacity>
          <Text style={styles.textFecha}>{this.parseTime(this.state.hora)}</Text>
        </View>
        {show && (
          <DateTimePicker
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={this.setValuePicker}
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
    marginTop: 5,
    marginLeft: 30
  },
  horizontalView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textFecha: {
    marginTop: 4,
    marginLeft: 5
  }
});
