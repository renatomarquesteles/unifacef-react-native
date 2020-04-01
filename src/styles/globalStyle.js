import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textBlue: {
    color: '#129ce6',
    fontWeight: 'bold'
  },
  textRed: {
    color: '#f00',
    fontWeight: 'bold'
  },
  postItContainer: {
    width: '100%',
    backgroundColor: '#eeeebb',
    borderWidth: 1,
    padding: 10,
    elevation: 5,
    marginVertical: 5
  },
  date: {
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
  f18: {
    fontSize: 18
  }
});
