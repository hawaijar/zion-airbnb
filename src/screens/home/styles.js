import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: 'white',
    width: 200,
    height: 40,
    borderRadius: 10,
    marginLeft: 25,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchButton: {
    backgroundColor: 'white',
    width: Dimensions.get('screen').width - 20,
    marginHorizontal: 10,
    height: 40,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 30,
    zIndex: 100,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
});

export default styles;
