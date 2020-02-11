import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    marginLeft: 24,
    marginRight: 12,
  },
  iconContainer: {
    backgroundColor: '$mainColorLight',
    borderRadius: 18,
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 28,
    width: 28,
  },
  text: {
    color: '$mainColorLight',
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
});
