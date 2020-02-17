import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    marginLeft: 18,
    marginRight: 9,
  },
  iconContainer: {
    backgroundColor: '$mainColorLight',
    borderRadius: 16,
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 24,
    width: 24,
  },
  text: {
    color: '$mainColorLight',
    fontSize: 12,
  },
  secondTextContainer: {
    marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon2: {
    height: 22,
    width: 22,
    tintColor: '$mainColorLight',
  },
  cardInfoText: {
    color: '$mainColorLight',
    fontSize: 10,
    marginLeft: 16,
    lineHeight: 11,
  },
  normalInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
