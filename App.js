import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex items-center justify-center'>
      <Text className="text-red-200">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

