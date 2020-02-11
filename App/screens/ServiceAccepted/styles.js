import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  titleContainer: {
    height: 140,
    width: 140,
    marginTop: 16,
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
    fontSize: 22,
  },
  subtitle: {
    color: '$mainColorLight',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 22,
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
    flex: 1,
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
    fontSize: 20,
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
    fontSize: 16,
  },
  okButtonText: {
    fontSize: 16,
  },
});
