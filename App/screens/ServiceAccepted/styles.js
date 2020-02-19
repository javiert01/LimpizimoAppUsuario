import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  bigContainer: {
    flex: 1,
    padding: 0,
    height: '100%'
  },
  container: {
    flex: 1,
    marginTop: 45,
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
    width: 70,
    height: 70,
  },
  employeeBorderImage: {
    width: 70,
    height: 70,
    zIndex: 1,
  },
  employeeImage: {
    position: 'absolute',
    top: 5,
    left: 2,
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  employeeInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4
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
    marginBottom: 5
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
  okButton: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$secondaryColor'
  },
  cancelButton: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  buttonText: {
    color: '$mainColorLight',
    fontSize: 12,
    fontWeight: 'bold'
  },
  mapContainer: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
  },
  map: {
    height: '100%',
  },
});
