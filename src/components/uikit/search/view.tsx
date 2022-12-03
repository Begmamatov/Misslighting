import AllProductItemCard from '@home/home/allProducts/AllProductItemCard';
import React from 'react';
import {FlatList, View} from 'react-native';
import GoBackHeader from '../Header/GoBackHeader';
import SearchNatlifHeader from '../Header/SearchNatlifHeader';

import {useSearchHook} from './hooks';
import {styles} from './styles';

const Search = () => {
  let {result, onStateChange} = useSearchHook();

  return (
    <View style={styles.container}>
      <GoBackHeader />
      <SearchNatlifHeader onChange={onStateChange('text')} />
      <FlatList
        data={result}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return <AllProductItemCard {...item} />;
        }}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default Search;
