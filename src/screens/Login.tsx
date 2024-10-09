import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import Constants from 'expo-constants';

const Login = ({ navigation }) => {
  const handleLogin = async () => {
    const redirectUri = AuthSession.makeRedirectUri({ useProxy: true });
    const authUrl = `https://dev-ee6bgom2rydd848w.us.auth0.com/authorize?` +
      `client_id=YOUR_AUTH0_CLIENT_ID` + // Replace with your actual Auth0 client ID
      `&response_type=token` +
      `&redirect_uri=${encodeURIComponent(redirectUri)}` +
      `&scope=openid profile email` +
      `&audience=FitFaster`;

    const result = await AuthSession.startAsync({ authUrl });

    if (result.type === 'success') {
      // Store the access token
      const accessToken = result.params.access_token;
      // You should securely store this token, perhaps using SecureStore
      // await SecureStore.setItemAsync('accessToken', accessToken);
      
      navigation.navigate('Home', { accessToken });
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F3F4F6' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 32 }}>Welcome to FitFaster</Text>
      <TouchableOpacity
        style={{ backgroundColor: '#3B82F6', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8 }}
        onPress={handleLogin}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;