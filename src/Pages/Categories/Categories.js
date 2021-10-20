import React from 'react';
import {SafeAreaView,FlatList} from 'react-native';
import Config from 'react-native-config';
import CategoryCard from '../../Cards/CategoryCard';
import Loading from '../../Components/Loading';
import useFetch from '../../Hooks/useFetch';
import styles from './Categories.style';
import Error from '../../Components/Error';

const URL = `${Config.API_URL}categories.php`;

function Categories({navigation}) {
  const {data, loading, error} = useFetch(URL);

  const handleCategorySelect = categoryName => {
    navigation.navigate('Meals', {categoryName});
  };

  const renderCategories = ({item}) => {
    return (
      <CategoryCard
        category={item}
        onSelect={() => handleCategorySelect(item.strCategory)}
      />
    );
  };
  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <Error></Error>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategories}></FlatList>
    </SafeAreaView>
  );
}

export default Categories;
