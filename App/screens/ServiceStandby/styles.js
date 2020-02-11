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
   //marginLeft: 20,
    fontSize: 28,
    textAlign: 'center'
  }, 
  logo: {
    width: 170
  }
});
