import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

// 💡 useLocalSearchParams lê o parâmetro "nome" que veio do login
//    router.push(`/home?nome=${usuario}`)  →  params.nome === "maria"

export default function HomeScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const nome = params.nome as string;

  return (
    <View style={styles.container}>
      
      <Text style={styles.bemVindo}>Bem-vindo,</Text>
      <Text style={styles.nome}>{nome}!</Text>

      <Text style={styles.texto}>
        Você está na tela Home.{'\n'}
        O nome veio como parâmetro da tela de Login.
      </Text>

      {/* 💡 router.back() volta para o Login */}
      <TouchableOpacity style={styles.botao} onPress={() => router.back()}>
        <Text style={styles.botaoTexto}>← Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 28,
    gap: 8,
  },
  bemVindo: {
    fontSize: 22,
    color: '#888',
  },
  nome: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#6C63FF',
    marginBottom: 16,
  },
  texto: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 16,
  },
  botao: {
    backgroundColor: '#6C63FF',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 8,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});
