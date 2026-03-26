import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#6C63FF' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      {/* 💡 Esconde o header só na tela de login */}
      <Stack.Screen name="login" options={{ headerShown: false }} />

      <Stack.Screen name="home" options={{ title: 'Início' }} />
      
      <Stack.Screen name="home2" options={{ title: 'Testes' }} />


    </Stack>
  );
}