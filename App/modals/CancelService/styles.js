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
    marginTop: 60,
    width: 120,
    height: 120,
    marginBottom: 80
  },
  textMessage: {
    color: '$greyText',
    fontSize: 22,
    textAlign: 'center',
    padding: 6,
    marginBottom: 20,
  },
  textQuestion: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    padding: 5,
    marginBottom: 10,
  },
  text1: {
    color: '$primaryColor',
    fontSize: 22,
    textAlign: 'center',
    paddingVertical: 5,
  },
  text2: {
    color: 'red',
    fontSize: 22,
    textAlign: 'center',
    paddingVertical: 5,
  },
});
