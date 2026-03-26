import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import MeuBotao from './components/MeuBotao';
import MeuInput from './components/MeuInput';
import MeuBotao2 from './components/MeuBota2';
import Teste from './teste';


export default function App() {
  

  return (
    <View style={styles.container}>
      <Teste />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
