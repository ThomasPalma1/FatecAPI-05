import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  image: {
    marginTop: 10,
    width: 105,
    height: 105,
    alignSelf: 'center',
    borderRadius: 75
  },
  photo: {
    width: 150,
    height: 150,
    alignItems: 'center',
    borderRadius: 25,
    margin: 10,
    justifyContent: 'center'
  },
  containerPhoto: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  }
});