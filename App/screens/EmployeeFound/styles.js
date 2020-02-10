import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primaryColor',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 35,
    marginTop: 30,
    height: 40,
    padding: 3,
    backgroundColor: '$secondaryColor',
    borderRadius: 25,
    zIndex: 2,
  },
  textContainer: {
    height: '100%',
    width: '50%',
    borderRadius: 25,
    justifyContent: 'center',
  },
  text: {
    color: '$mainColorLight',
   //marginLeft: 20,
    fontSize: 17,
    textAlign: 'center'
  },
  titleText: {
    color: '$mainColorLight',
   //marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center'
  }, 
  buttonText: {
    color: '$mainColorLight',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  logo: {
    width: 170
  }
});