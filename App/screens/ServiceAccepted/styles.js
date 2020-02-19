import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  titleContainer: {
    height: 140,
    width: 140,
    borderRadius: 70,
    overflow: 'hidden',
    zIndex: 1,
  },
  titleTopPart: {
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primaryColor',
  },
  title: {
    marginTop: 16,
    color: '$mainColorLight',
    fontSize: 20,
  },
  subtitle: {
    color: '$mainColorLight',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  titleBottomPart: {
    height: '40%',
    backgroundColor: '$secondaryColor',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 28,
    width: 28,
  },
  serviceDetailsContainer: {
    marginTop: -56,
    backgroundColor: '$primaryColor',
    borderRadius: 40,
    width: '100%',
    overflow: 'hidden',
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
  serviceDetailsText: {
    marginTop: 12,
    color: '$mainColorLight',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
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
    marginLeft: 18,
    paddingVertical: 10,
  },
  employeeImageContainer: {
    position: 'relative',
    width: 75,
    height: 75,
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
    fontSize: 14,
  },
  employeeServicesAmount: {
    color: '$mainColorLight',
    fontSize: 10,
  },
  employeeRating: {
    marginLeft: 4,
    color: '$mainColorLight',
    fontSize: 12,
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
    fontSize: 12,
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
    fontSize: 12,
  },
  okButtonText: {
    fontSize: 12,
  },
});
