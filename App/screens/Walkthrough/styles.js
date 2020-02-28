import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$mainColorLight',
  },
  imageContainer: {
    height: '55%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '60%',
  },
  infoContainer: {
    height: '45%',
    paddingHorizontal: 16,
    paddingVertical: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  title: {
    color: '$mainColorLight',
    textAlign: 'center',
    fontSize: '$xxHuge',
  },
  description: {
    marginTop: 10,
    color: '$mainColorLight',
    textAlign: 'center',
    fontSize: '$small',
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
  arrowImageContainer: {
    height: 60,
    width: 60,
    marginLeft: 'auto',
    marginRight: 16,
  },
  arrowImage: {
    height: '100%',
    width: '100%',
    marginLeft: 'auto',
  },
});
