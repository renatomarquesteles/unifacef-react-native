import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
  },
  primaryButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#F15156',
    margin: 10,
    borderRadius: 8,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    backgroundColor: '#2d2d2d',
    paddingHorizontal: 10,
    borderRadius: 8,
    width: '100%',
    color: '#fff',
  },
  ingredientesTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  ingredientes: {
    width: '100%',
    padding: 20,
    backgroundColor: '#333',
    borderRadius: 8,
  },
  ingredientesText: {
    color: '#fff',
  },
});
