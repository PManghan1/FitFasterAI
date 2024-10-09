import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Header from '../components/Header';
import MacroChart from '../components/MacroChart';
import MealList from '../components/MealList';
import * as AuthSession from 'expo-auth-session';
import { setAuthToken, getAuthorizedResource } from '../utils/api';

const Home = ({ route, navigation }) => {
  const [meals, setMeals] = useState([]);
  const [macroData, setMacroData] = useState([
    { name: 'Protein', value: 0, color: '#FF6384' },
    { name: 'Carbs', value: 0, color: '#36A2EB' },
    { name: 'Fat', value: 0, color: '#FFCE56' },
  ]);
  const [securedData, setSecuredData] = useState('');

  useEffect(() => {
    const { accessToken } = route.params;
    setAuthToken(accessToken);
    fetchSecuredData();
  }, []);

  const fetchSecuredData = async () => {
    try {
      const data = await getAuthorizedResource();
      setSecuredData(data);
    } catch (error) {
      console.error('Error fetching secured data:', error);
    }
  };

  const handleLogout = async () => {
    // Clear the access token
    setAuthToken(null);
    // You should also remove the token from secure storage
    // await SecureStore.deleteItemAsync('accessToken');
    
    navigation.navigate('Login');
  };

  // ... rest of the component remains the same

  return (
    <View style={{ flex: 1, backgroundColor: '#F3F4F6' }}>
      <Header />
      <ScrollView style={{ padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>Welcome to FitFaster</Text>
        <Text style={{ marginTop: 8, marginBottom: 16 }}>Your UK-specific fitness tracking app</Text>
        
        <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 16 }}>Secured Data:</Text>
        <Text>{securedData}</Text>
        
        {/* ... rest of the JSX remains the same */}
      </ScrollView>
    </View>
  );
};

export default Home;