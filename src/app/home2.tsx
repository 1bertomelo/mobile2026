import { Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';


export default function Home2() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Essa é a tela Home2.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 18
  }
});