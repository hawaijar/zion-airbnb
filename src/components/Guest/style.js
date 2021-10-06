import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#8a8888',
  },
  operator: {
    fontSize: 16,
    color: '#777474',
  },
  textCount: {
    marginHorizontal: 20,
    fontSize: 16,
  },
  mainTitle: {
    fontWeight: 'bold',
  },
  secondaryTitle: {
    color: '#8f8b8b',
  },
});

export default styles;
