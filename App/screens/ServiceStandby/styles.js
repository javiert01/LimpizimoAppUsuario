import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primaryColor',
  },
  text: {
    color: 'white',
    marginBottom: 0,
    fontSize: 21,
    textAlign: 'center',
    paddingLeft: 45,
    paddingRight: 45
  }, 
  logo: {
    marginTop: 0,
    width: 170,
    height: 150
  }
});
