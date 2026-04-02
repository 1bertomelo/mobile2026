import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useLocalSearchParams } from 'expo-router'; // ← lê os params da URL


interface Time {
  id: number;
  nome: string;
  estado: string;
  titulos: number;
  escudo: string;
}
const dadosTimes: Time[] = [
  { id: 1, nome: 'Flamengo',      estado: 'RJ', titulos: 8,  escudo: '🔴⚫' },
  { id: 2, nome: 'Palmeiras',     estado: 'SP', titulos: 10, escudo: '🟢⚪' },
  { id: 3, nome: 'Santos',         estado: 'SP', titulos: 8,  escudo: '⚪⚫' },
  { id: 4, nome: 'São Paulo',      estado: 'SP', titulos: 6,  escudo: '🔴⚫⚪' },
  { id: 5, nome: 'Internacional', estado: 'RS', titulos: 3,  escudo: '🔴⚪' },
  { id: 6, nome: 'Grêmio',         estado: 'RS', titulos: 2,  escudo: '🔵⚫' },
  { id: 7, nome: 'Corinthians',    estado: 'SP', titulos: 7,  escudo: '⚫⚪' },
  { id: 8, nome: 'Cruzeiro',       estado: 'MG', titulos: 4,  escudo: '🔵⚪' },
];
export default function TelaDetalhes() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const time = dadosTimes.find((t) => t.id === Number(id));

  if (!time) {
    return <Text>Time não encontrado.</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.escudo}>{time.escudo}</Text>
      <Text style={styles.nome}>{time.nome}</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Estado</Text>
        <Text style={styles.valor}>{time.estado}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Títulos Brasileirão</Text>
        <Text style={styles.valor}>{time.titulos}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 24 },
  escudo: { fontSize: 64, marginBottom: 8 },
  nome: { fontSize: 28, fontWeight: 'bold', marginBottom: 24 },
  card: {
    width: '100%', flexDirection: 'row',
    justifyContent: 'space-between', backgroundColor: '#FFF',
    borderRadius: 8, padding: 16, marginBottom: 12 },
  label: { fontSize: 15, color: '#666' },
  valor: { fontSize: 15, fontWeight: 'bold' },
});
