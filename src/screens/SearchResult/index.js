import React from 'react';
import {FlatList} from 'react-native';
import posts from '../../../assets/data/feed';
import Post from '../../components/Post';

const SearchResult = () => {
  return <FlatList data={posts} renderItem={({item}) => <Post {...item} />} />;
};

export default SearchResult;
