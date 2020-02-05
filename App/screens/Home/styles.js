import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  // container: {
  //   flex: 1,
  //   //height: 1900,
  //   paddingTop: 5,
  //   backgroundColor: '#672D91',
  //   alignItems: 'center',
  //   justifyContent: 'flex-start',
  // },
  // map: {
  //   ...StyleSheet.absoluteFillObject,
  // },
  // contentContainer: {
  //   alignItems: 'flex-start',
  //   width: '100%',
  //   flex: 1,
  //   paddingTop: 5,
  //   backgroundColor: 'white',
  // },
  // formContainer: {
  //   width: 350,
  //   //flex: 1,
  //   height: 500,
  //   paddingTop: 5,
  //   backgroundColor: 'white',
  //   alignItems: 'center',
  //   justifyContent: 'flex-start',
  // },
  // pickerContainer: {
  //   alignItems: 'center',
  //   backgroundColor: 'white',
  //   paddingBottom: 5,
  //   paddingLeft: 24,
  //   paddingRight: 24,
  // },
  // textPregunta: {
  //   color: 'grey',
  //   margin: 3,
  // },
  container: {
    flex: 1,
    backgroundColor: '$primaryColor',
  },
  greeting: {
    color: '$mainColorLight',
    backgroundColor: '$secondaryColor',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 4,
    fontWeight: 'bold',
  },
  serviceQuestion: {
    color: '$mainColorLight',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 8,
    fontWeight: 'bold',
  },
  cleaningType: {
    color: '$mainColorLight',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 4,
  },
  cleaningOptionsContainer: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
    marginHorizontal: 110,
  },
  cleaningOption: {
    alignItems: 'center',
  },
  cleaningImageContanier: {
    height: 95,
  },
  cleaningImage: {
    height: 75,
    width: 75,
  },
  cleaningMainText: {
    color: '$mainColorLight',
    fontSize: 14,
    marginTop: 20,
  },
  cleaningDeepText: {
    color: '$mainColorLight',
    fontSize: 14,
    fontWeight: 'bold',
  },
  bottomView: {
    height: '100%',
  },
  frequency: {
    flexDirection: 'row',
    marginHorizontal: 35,
    marginTop: 30,
    height: 50,
    padding: 3,
    backgroundColor: '$primaryColor',
    borderWidth: 3,
    borderColor: '$mainColorLight',
    borderRadius: 25,
    zIndex: 1,
  },
  optionContainer: {
    height: '100%',
    borderRadius: 25,
    justifyContent: 'center',
  },
  frequencyText: {
    color: '$mainColorLight',
    fontSize: 16,
    textAlign: 'center',
  },
  frecuencyInfoContainer: {
    marginTop: -40,
    marginHorizontal: 20,
    backgroundColor: '$mainColorLight',
    borderRadius: 30,
    paddingTop: 45,
    paddingBottom: 10,
    paddingHorizontal: 30,
  },
  frequencyOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  frequencyOptionText: {
    fontSize: 16,
    color: '$grayText',
    fontWeight: 'bold',
  },
  recurrencePickerContainer: {
    marginLeft: 'auto',
    borderWidth: 2,
    borderColor: '$primaryColor',
    height: 26,
    width: 150,
    borderRadius: 13,
  },
  recurrencePicker: {
    height: '100%',
    marginLeft: -25,
    marginRight: -37,
    transform: [{ scale: 0.7 }],
    borderWidth: 1,
    borderColor: 'black',
  },
  dateTimePickerTouchableArea: {
    marginLeft: 'auto',
    width: 150,
  },
  dateTimePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateTimePickerImage: {
    height: 24,
    width: 24,
  },
  dateTimePickerText: {
    marginLeft: 10,
    color: '$grayText',
  },
  placeQuestion: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    color: '$grayText',
    fontWeight: 'bold',
  },
  serviceHours: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '$grayText',
    fontWeight: 'bold',
  },
  mapContainer: {
    height: '100%',
    marginTop: -20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: 'hidden',
  },
  map: {
    height: '100%',
  },
});
