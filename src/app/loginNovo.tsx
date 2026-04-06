// LoginNovo.tsx
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert
} from 'react-native';
import { useRouter } from 'expo-router';
import BASE_URL from '../apiService/api';

export default function loginNovo() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const salvarUsuario = async () => {
    if (!nome || !email) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    try {
      const resposta = await fetch(`${BASE_URL}/usuarios`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email }),
      });

      if (!resposta.ok) {
        throw new Error('Erro ao salvar usuario');
      }

      Alert.alert('Sucesso', 'Usuario salvo com sucesso');
      router.back(); // Volta para a tela anterior
    } catch (e) {
      Alert.alert('Erro', 'Nao foi possivel salvar o usuario');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Novo Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.botao} onPress={salvarUsuario}>
        <Text style={styles.textoBotao}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5', justifyContent: 'center' },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  botao: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});