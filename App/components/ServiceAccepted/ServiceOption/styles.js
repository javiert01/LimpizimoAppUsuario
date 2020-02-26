import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
    marginLeft: 12,
    marginRight: 9,
  },
  iconContainer: {
    backgroundColor: '$mainColorLight',
    borderRadius: 14,
    height: 28,
    width: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 20,
    width: 20,
  },
  text: {
    color: '$mainColorLight',
    fontSize: '$xSmall',
  },
  secondTextContainer: {
    marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon2: {
    height: 20,
    width: 20,
    tintColor: '$mainColorLight',
  },
  cardInfoText: {
    color: '$mainColorLight',
    fontSize: '$xxxSmall',
    marginLeft: 12,
    lineHeight: '$xxSmall',
  },
  normalInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
