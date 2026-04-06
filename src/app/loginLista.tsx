// UsuariosScreen.tsx
import React, { useEffect, useState, useCallback } from 'react';
import {
  View, Text, FlatList, ActivityIndicator,
  StyleSheet, TouchableOpacity
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Usuario } from '../types/usuario';
import BASE_URL from '../apiService/api';
import { useRouter } from 'expo-router';
 
export default function loginLista() {
  const router = useRouter();
 
  // Estado para guardar a lista de usuarios
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
 
  // Estado para controlar o loading
  const [carregando, setCarregando] = useState(true);
 
  // Estado para mensagens de erro
  const [erro, setErro] = useState<string | null>(null);
 
  // Funcao GET - busca todos os usuarios
  const buscarUsuarios = useCallback(async () => {
    try {
      setCarregando(true);
      const resposta = await fetch(`${BASE_URL}/usuarios`);
 
      if (!resposta.ok) {
        throw new Error('Erro ao buscar usuarios');
      }
 
      const dados: Usuario[] = await resposta.json();
      setUsuarios(dados);
    } catch (e) {
      setErro('Nao foi possivel conectar ao servidor');
    } finally {
      setCarregando(false);
    }
  }, []);
 
  // useFocusEffect: executa buscarUsuarios quando a tela ganha foco
  useFocusEffect(
    useCallback(() => {
      buscarUsuarios();
    }, [buscarUsuarios])
  );
 
  // Exibe loading enquanto carrega
  if (carregando) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }
 
  // Exibe erro se nao conseguiu conectar
  if (erro) {
    return <Text style={styles.erro}>{erro}</Text>;
  }
 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Lista de Usuarios</Text>
        <TouchableOpacity style={styles.botaoNovo} onPress={() => router.push('/loginNovo')}>
          <Text style={styles.textoBotao}>Novo</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',    
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  titulo: { fontSize: 22, fontWeight: 'bold' },
  card: {
    backgroundColor: '#fff', borderRadius: 8,
    padding: 14, marginBottom: 10, marginHorizontal: 16, marginTop: 10,
    borderWidth: 1, borderColor: '#e0e0e0'
  },
  nome:  { fontSize: 16, fontWeight: '600' },
  email: { fontSize: 13, color: '#666', marginTop: 2 },
  erro:  { color: 'red', textAlign: 'center', marginTop: 40 },
  botaoNovo: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
