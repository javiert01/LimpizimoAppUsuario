import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$mainColorLight',
  },
  imageContainer: {
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '60%',
  },
  infoContainer: {
    height: '40%',
    paddingHorizontal: 25,
    paddingVertical: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  title: {
    color: '$mainColorLight',
    textAlign: 'center',
    fontSize: 40,
  },
  description: {
    marginTop: 10,
    color: '$mainColorLight',
    textAlign: 'center',
    fontSize: 16,
  },
  pageAndArrowContainer: {
    flexDirection: 'row',
    marginTop: 'auto',
    alignItems: 'center',
  },
  pageIndicator: {
    marginLeft: 20,
    width: 45,
  },
  arrowImage: {
    height: 60,
    width: 60,
    marginLeft: 'auto',
  },
});
