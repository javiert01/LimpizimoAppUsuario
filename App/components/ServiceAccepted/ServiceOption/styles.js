import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
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
  button: {
    marginLeft: 'auto',
    height: '100%',
    justifyContent: 'center',
  },
});
