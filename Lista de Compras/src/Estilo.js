import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 30,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  list: {
    marginVertical: 10,
  },

  item: {
    paddingBottom: 10,
    fontFamily: "'Courier New', monospace",
    marginVertical: 5,
    borderBottom: '1px dashed #000'
  },

  input: {
    height: 36,
    border: '1px solid #999',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },

  botao: {
    marginTop: 10,
  }
});
