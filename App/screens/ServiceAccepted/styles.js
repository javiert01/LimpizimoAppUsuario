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
    height: 120,
    width: 120,
    borderRadius: 60,
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
    fontSize: '$big',
  },
  subtitle: {
    color: '$mainColorLight',
    fontSize: '$big',
    fontWeight: 'bold',
    lineHeight: '$big',
  },
  titleBottomPart: {
    height: '40%',
    backgroundColor: '$secondaryColor',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 26,
    width: 26,
  },
  serviceDetailsContainer: {
    marginTop: -48,
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
    fontSize: '$medium',
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
    marginLeft: 12,
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
    marginBottom: 5
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
    fontSize: '$xSmall',
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
