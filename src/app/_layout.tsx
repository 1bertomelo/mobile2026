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
      <Stack.Screen name="login2" options={{ headerShown: false }} />

      <Stack.Screen name="home" options={{ title: 'Início' }} />

      <Stack.Screen name="loginLista" options={{ title: 'Lista de Usuários' }} />
      
      <Stack.Screen name="loginNovo" options={{ title: 'Novo Usuário' }} />
      
      <Stack.Screen name="home2" options={{ title: 'Testes' }} />
 
      <Stack.Screen name="TelaHome"    options={{ title: 'Times do Brasil' }} />
      
        <Stack.Screen name="TelaDetalhes/[id]" options={{ title: 'Detalhes do Time' }} />

    </Stack>
  );
}