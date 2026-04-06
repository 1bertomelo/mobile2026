import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity,
         StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router'; // ← hook de navegação

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

export default function TelaHome() {
  const router = useRouter(); // ← substitui o 'navigation' prop
  const [times, setTimes] = useState<Time[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimes(dadosTimes);
      setCarregando(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const renderItem = ({ item }: { item: Time }) => (
    <View style={styles.card}>
      <Text style={styles.escudo}>{item.escudo}</Text>
      <View style={styles.info}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.estado}>{item.estado}</Text>
      </View>
      <TouchableOpacity
        style={styles.botao}
        onPress={() =>
          router.push(`/TelaDetalhes/${item.id}`)
        }
      >
        <Text style={styles.botaoTexto}>Ver detalhes</Text>
      </TouchableOpacity>
    </View>
  );

  if (carregando) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList<Time>
        data={times}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListHeaderComponent={
          <Text style={styles.titulo}>Times do Brasileirão</Text>
        }
        ItemSeparatorComponent={() => <View style={styles.separador} />}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  card: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#FFF', borderRadius: 8, padding: 12 },
  escudo: { fontSize: 32, marginRight: 12 },
  info: { flex: 1 },
  nome: { fontSize: 16, fontWeight: 'bold' },
  estado: { fontSize: 13, color: '#666' },
  botao: { backgroundColor: '#2E5FA3', borderRadius: 6, padding: 8 },
  botaoTexto: { color: '#FFF', fontSize: 13 },
  separador: { height: 10 },
});