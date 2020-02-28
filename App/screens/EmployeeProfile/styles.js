import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primaryColor',
    paddingTop: 150,
  },
  employeeDetailsContainer: {
    backgroundColor: '$mainColorLight',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: '100%',
    height: '100%',
    paddingTop: 70,
  },
  employeeDataContainer1: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 4,
  },
  employeeDataContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 25,
  },
  employeeDataContainer3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 25,
    marginBottom: 4,
  },
  touchableContainer: {
    position: 'absolute',
    top: 5,
    left: 15,
  },
  backContainer: {
    flexDirection: 'row',
  },
  backImage: {
    width: 25,
    height: 25,
  },
  backText: {
    color: '$mainColorLight',
    paddingLeft: 5,
  },
  listContainer: {
    marginTop: 40,
  },
  listItemContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
  },
  imageEmployeeContainer: {
    position: 'absolute',
    top: 55,
    zIndex: 1,
  },
  upArrowContainer: {
    marginTop: 20,
    marginLeft: 16,
    height: 25,
    width: 16,
  },
  upArrow: {
    height: '100%',
    width: '100%',
  },
  employeeNameText: {
    marginTop: 12,
    color: '$primaryColor',
    fontSize: '$xxBig',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  employeeIdText: {
    marginTop: 4,
    color: '$primaryColor',
    fontSize: '$medium',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoText: {
    color: '$greyText2',
  },
  employeeDetailsText: {
    marginTop: 2,
    color: '$primaryColor',
    fontSize: '$big',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listDataText: {
    color: '$greyTextLight1',
    marginLeft: 5,
    marginTop: 10,
    fontSize: '$medium',
  },
  downArrowV2: {
    alignSelf: 'center',
    height: 12,
    marginBottom: 4,
  },
  lineSeparator: {
    height: 1,
    backgroundColor: '$mainColorLight',
  },
  employee: {
    flexDirection: 'row',
    marginLeft: 12,
    paddingVertical: 10,
  },
  employeeImageContainer: {
    position: 'relative',
    width: 75,
    height: 75,
  },
  checkImage: {
    position: 'absolute',
    top: 10,
    left: 27,
    width: 27,
    height: 22,
    zIndex: 1,
  },
  purpleCircleImage: {
    width: 40,
    height: 40,
  },
  employeeBorderImage: {
    width: 75,
    height: 75,
    zIndex: 1,
  },
  employeeImage: {
    position: 'absolute',
    top: 5,
    left: 2,
    width: 65,
    height: 65,
    borderRadius: 32.5,
  },
  employeeInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4,
  },
  employeeName: {
    color: '$mainColorLight',
    fontWeight: 'bold',
    fontSize: '$small',
  },
  employeeServicesAmount: {
    color: '$mainColorLight',
    fontSize: '$xxSmall',
  },
  employeeRating: {
    marginLeft: 4,
    color: '$mainColorLight',
    fontSize: '$xSmall',
  },
  star: {
    color: '$secondaryColor',
  },
  phoneImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneImage: {
    width: 24,
    height: 24,
  },
  seeProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 4,
  },
  seeProfileText: {
    color: '$mainColorLight',
    fontSize: '$xSmall',
  },
  seeProfileImage: {
    width: 11,
    height: 11,
  },
  bottomButtonsContainer: {
    backgroundColor: '$mainColorLight',
    height: 40,
    width: '100%',
    marginTop: 'auto',
    flexDirection: 'row',
  },
  button: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: 'red',
    fontSize: '$xSmall',
  },
  okButtonText: {
    fontSize: '$xSmall',
  },
});
