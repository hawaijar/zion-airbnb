import React from 'react';
import styles from './style';

import {Text, View, Image} from 'react-native';

const POST_IMAGE_URL =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg';

const Post = () => {
  return (
    <View style={styles.container}>
      {/*image*/}
      <Image source={{uri: POST_IMAGE_URL}} style={styles.image} />
      {/*bed & bedroom*/}
      <Text style={styles.bedroom}>1 bed 1 bedroom</Text>
      {/*type & description*/}
      <Text style={styles.description} numberOfLines={2}>
        Entire flat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud
      </Text>
      {/*old price & new Price*/}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36 </Text>
        <Text style={styles.newPrice}> $20</Text>
        /night
      </Text>
      {/*total price*/}
      <Text style={styles.totalPrice}>$120 total</Text>
    </View>
  );
};

export default Post;
