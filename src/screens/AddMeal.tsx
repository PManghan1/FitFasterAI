import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddMeal = ({ route }) => {
  const navigation = useNavigation();
  const { addMeal } = route.params;
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fat, setFat] = useState('');

  const handleAddMeal = () => {
    const newMeal = {
      id: Date.now().toString(),
      name,
      calories: parseInt(calories),
      protein: parseInt(protein),
      carbs: parseInt(carbs),
      fat: parseInt(fat),
    };
    addMeal(newMeal);
    navigation.goBack();
  };

  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold mb-4">Add New Meal</Text>
      <View className="mb-4">
        <Text className="mb-2">Meal Name</Text>
        <TextInput
          className="bg-white p-2 rounded"
          value={name}
          onChangeText={setName}
          placeholder="Enter meal name"
        />
      </View>
      <View className="mb-4">
        <Text className="mb-2">Calories</Text>
        <TextInput
          className="bg-white p-2 rounded"
          value={calories}
          onChangeText={setCalories}
          placeholder="Enter calories"
          keyboardType="numeric"
        />
      </View>
      <View className="mb-4">
        <Text className="mb-2">Protein (g)</Text>
        <TextInput
          className="bg-white p-2 rounded"
          value={protein}
          onChangeText={setProtein}
          placeholder="Enter protein"
          keyboardType="numeric"
        />
      </View>
      <View className="mb-4">
        <Text className="mb-2">Carbs (g)</Text>
        <TextInput
          className="bg-white p-2 rounded"
          value={carbs}
          onChangeText={setCarbs}
          placeholder="Enter carbs"
          keyboardType="numeric"
        />
      </View>
      <View className="mb-4">
        <Text className="mb-2">Fat (g)</Text>
        <TextInput
          className="bg-white p-2 rounded"
          value={fat}
          onChangeText={setFat}
          placeholder="Enter fat"
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity
        className="bg-primary py-3 px-6 rounded-lg"
        onPress={handleAddMeal}
      >
        <Text className="text-white font-semibold text-center">Add Meal</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddMeal;