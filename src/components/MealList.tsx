import React from 'react';
import { View, Text, FlatList } from 'react-native';

const MealList = ({ meals }) => {
  const renderMealItem = ({ item }) => (
    <View className="bg-white p-4 mb-2 rounded-lg">
      <Text className="font-bold">{item.name}</Text>
      <Text>Calories: {item.calories}</Text>
      <Text>Protein: {item.protein}g</Text>
      <Text>Carbs: {item.carbs}g</Text>
      <Text>Fat: {item.fat}g</Text>
    </View>
  );

  return (
    <FlatList
      data={meals}
      renderItem={renderMealItem}
      keyExtractor={(item) => item.id}
      className="mt-4"
    />
  );
};

export default MealList;