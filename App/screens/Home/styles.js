import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$primaryColor',
  },
  greeting: {
    color: '$mainColorLight',
    backgroundColor: '$secondaryColor',
    fontSize: '$small',
    textAlign: 'center',
    paddingVertical: 4,
    fontWeight: 'bold',
  },
  serviceQuestion: {
    color: '$mainColorLight',
    fontSize: '$xBig',
    textAlign: 'center',
    marginTop: 8,
    fontWeight: 'bold',
  },
  cleaningType: {
    color: '$mainColorLight',
    fontSize: '$small',
    textAlign: 'center',
    marginTop: 2,
  },
  cleaningOptionsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: 180,
  },
  cleaningOption: {
    alignItems: 'center',
  },
  cleaningImageContainer: {
    height: 65,
    width: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 38,
    borderColor: '$mainColorLight',
    borderWidth: 3,
    transform: [{ perspective: 1000 }],
  },
  cleaningImage: {
    height: 36,
    width: 36,
  },
  cleaningMainText: {
    color: '$mainColorLight',
    fontSize: '$xxSmall',
    marginTop: 8,
  },
  cleaningDeepText: {
    color: '$mainColorLight',
    fontSize: '$xxSmall',
    fontWeight: 'bold',
  },
  bottomView: {
    flex: 1,
  },
  frequency: {
    flexDirection: 'row',
    marginHorizontal: 35,
    marginTop: 16,
    height: 35,
    padding: 3,
    backgroundColor: '$primaryColor',
    borderWidth: 3,
    borderColor: '$mainColorLight',
    borderRadius: 17.5,
    zIndex: 2,
  },
  optionContainer: {
    height: '100%',
    borderRadius: 25,
    justifyContent: 'center',
  },
  frequencyText: {
    color: '$mainColorLight',
    fontSize: '$xSmall',
    textAlign: 'center',
  },
  frequencyInfoContainer: {
    marginTop: -25,
    marginHorizontal: 20,
    backgroundColor: '$mainColorLight',
    borderRadius: 30,
    paddingTop: 25,
    paddingBottom: 2,
    paddingHorizontal: 30,
    zIndex: 1,
  },
  frequencyOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  frequencyOptionText: {
    fontSize: '$xSmall',
    color: '$greyText',
    fontWeight: 'bold',
  },
  recurrencePickerContainer: {
    marginLeft: 'auto',
    borderWidth: 2,
    borderColor: '$primaryColor',
    height: 22,
    width: 125,
    borderRadius: 13,
  },
  recurrencePicker: {
    height: '100%',
    marginLeft: -40,
    marginRight: -50,
    marginTop: -1,
    transform: [{ scale: 0.6 }],
  },
  dateTimePickerTouchableArea: {
    marginLeft: 'auto',
    width: 125,
    alignItems: 'center',
  },
  dateTimePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateTimePickerImage: {
    height: 18,
    width: 18,
  },
  dateTimePickerText: {
    marginLeft: 8,
    color: '$greyText',
    fontSize: '$xSmall',
  },
  placeQuestion: {
    marginTop: 4,
    fontSize: '$medium',
    textAlign: 'center',
    color: '$greyText',
    fontWeight: 'bold',
  },
  placeOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '$primaryColor',
    padding: 3,
    marginHorizontal: 20,
    borderRadius: 16,
    marginTop: 2,
  },
  placeOptionImageContainer: {
    backgroundColor: '$mainColorLight',
    borderRadius: 13,
    height: 26,
    width: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeOptionImage: {
    height: 21,
    width: 21,
  },
  placePickerInfoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  placePicker: {
    height: 18,
    marginHorizontal: -28,
    marginTop: -4,
    color: '$mainColorLight',
    transform: [{ scale: 0.8 }],
  },
  placeAddress: {
    color: '$mainColorLight',
    fontSize: '$xxxSmall',
  },
  serviceHours: {
    marginTop: 4,
    fontSize: '$small',
    textAlign: 'center',
    color: '$greyText',
    fontWeight: 'bold',
  },
  serviceHoursOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '$secondaryColor',
    padding: 2,
    marginHorizontal: 50,
    borderRadius: 12,
  },
  serviceHoursOptionImageContainer: {
    backgroundColor: '$mainColorLight',
    borderRadius: 9,
    height: 18,
    width: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceHoursOptionImage: {
    height: 12,
    width: 12,
  },
  serviceHoursPickerContainer: {
    marginLeft: 4,
    flex: 1,
  },
  serviceHoursPicker: {
    height: 18,
    color: '$mainColorLight',
    marginTop: -4,
    marginRight: -20,
    transform: [{ scale: 0.8 }],
  },
  cardOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 55,
    alignSelf: 'center',
    marginTop: 4,
  },
  cardOptionImage: {
    height: 16,
    width: 16,
  },
  cardPickerContainer: {
    height: 16,
    flex: 1,
    marginLeft: 4,
  },
  cardPicker: {
    height: 17,
    transform: [{ scale: 0.55 }],
    color: '$greyTextLight',
    marginLeft: -63,
    marginRight: -65,
    marginTop: -2,
  },
  askForButton: {
    height: 120,
    width: 120,
    backgroundColor: '$primaryColor',
    zIndex: 1,
    marginTop: 'auto',
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  askForButtonPartsContainer: {
    height: 104,
    width: 104,
    borderRadius: 52,
    overflow: 'hidden',
  },
  askForButtonTopPart: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  askForText: {
    color: '$mainColorLight',
    fontSize: '$big',
  },
  now: {
    color: '$mainColorLight',
    fontSize: '$big',
    fontWeight: 'bold',
    lineHeight: '$big',
  },
  askForButtonBottomPart: {
    height: '50%',
    backgroundColor: '$secondaryColor',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calculatedPrice: {
    color: '$mainColorLight',
    fontSize: '$huge',
    fontWeight: 'bold',
    lineHeight: '$huge',
  },
  popupContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1
  },
  popupImgContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
    width: '90%',
  },
  popupTouchable: {
    width: '100%',
  },
  popupTextContainer: {
    paddingVertical: 20,
  },
  popupImg: {
    width: 130,
    height: 200,
  },
  messagePopupText: {
    fontSize: '$medium',
    textAlign: 'center',
  },
  okPopupText: {
    color: '$secondaryColor',
    fontWeight: 'bold',
    fontSize: '$xBig',
    textAlign: 'center',
    marginTop: 15,
  },
  lineSeparator: {
    height: 1,
    width: '112%',
    backgroundColor: '$mainColorDark',
  },
  mapContainer: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: 'hidden',
    position: 'absolute',
    top: 45,
    right: 0,
  },
  map: {
    flex: 1,
  },
});
