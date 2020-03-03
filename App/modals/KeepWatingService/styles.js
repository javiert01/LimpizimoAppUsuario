import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$mainColorLight',
  },
  messageBorder: {
    borderTopWidth: 1,
    width: '100%',
    paddingVertical: 15,
  },
  image: {
    marginTop: 20,
    width: 220,
    height: 250,
    marginBottom: 20,
  },
  textMessage: {
    color: '$greyText',
    fontSize: '$xBig',
    textAlign: 'center',
    padding: 6,
    marginBottom: 40,
  },
  textQuestion: {
    fontWeight: 'bold',
    fontSize: '$xxBig',
    textAlign: 'center',
    padding: 5,
    marginBottom: 20,
  },
  text1: {
    color: '$secondaryColor',
    fontSize: '$xBig',
    textAlign: 'center',
    paddingVertical: 8,
  },
  text2: {
    color: '$primaryColor',
    fontSize: '$xBig',
    textAlign: 'center',
    paddingVertical: 5,
  },
});
