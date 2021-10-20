import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../Hooks/useFetch';
import Loading from '../../Components/Loading';
import Error from '../../Components/Error';
import MealCard from '../../Cards/MealCard';
import styles from './Meals.style'

function Meals({route, navigation}) {
  const {categoryName} = route.params;
  const {data, loading, error} = useFetch(
    `${Config.API_URL}filter.php?c=${categoryName}`,
  );

  const handleMealSelect = mealId=> {
    navigation.navigate('MealDetail', {mealId});
  };

  function renderMeals({item}) {
    return <MealCard meal={item} onSelect={()=>handleMealSelect(item.idMeal)}></MealCard>;
  }
  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <Error></Error>;
  }
  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderMeals}></FlatList>
    </View>
  );
}

export default Meals;
