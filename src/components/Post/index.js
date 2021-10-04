import React from 'react';
import styles from './style';

import {Text, View, Image} from 'react-native';

const POST_IMAGE_URL =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg';

const Post = ({
  bed,
  bedroom,
  image,
  type,
  description,
  oldPrice,
  newPrice,
  totalPrice,
}) => {
  return (
    <View style={styles.container}>
      {/*image*/}
      <Image source={{uri: image}} style={styles.image} />
      {/*bed & bedroom*/}
      <Text style={styles.bedroom}>{`${bed} bed ${bedroom} bedroom`}</Text>
      {/*type & description*/}
      <Text style={styles.description} numberOfLines={2}>
        {`${type}.${description}`}
      </Text>
      {/*old price & new Price*/}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>{`$${oldPrice}`} </Text>
        <Text style={styles.newPrice}>{`$${newPrice}`}</Text>
        /night
      </Text>
      {/*total price*/}
      <Text style={styles.totalPrice}>{`$${totalPrice} total`}</Text>
    </View>
  );
};

export default Post;
