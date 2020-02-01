import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    //height: 1900,
    paddingTop: 5,
    backgroundColor: '#672D91',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contentContainer: {
    alignItems: 'flex-start',
    width: '100%',
    flex: 1,
    paddingTop: 5,
    backgroundColor: 'white',
  },
  formContainer: {
    width: 350,
    //flex: 1,
    height: 500,
    paddingTop: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  pickerContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: 5,
    paddingLeft: 24,
    paddingRight: 24,
  },
  textPregunta: {
    color: 'grey',
    margin: 3,
  },
});
