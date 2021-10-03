import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bedroom: {
    marginVertical: 10,
    color: '#6c6b6b',
  },
  description: {
    fontSize: 18,
    lineHeight: 25,
  },
  prices: {
    fontSize: 18,
  },
  oldPrice: {
    color: '#6c6b6b',
    textDecorationLine: 'line-through',
    marginRight: 5,
  },
  newPrice: {
    fontWeight: 'bold',
  },
  totalPrice: {
    marginTop: 10,
    color: '#6c6b6b',
    textDecorationLine: 'underline',
  },
});

export default styles;
