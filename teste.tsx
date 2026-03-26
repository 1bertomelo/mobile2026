import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import MeuInput from './components/MeuInput';
import MeuBotao2 from './components/MeuBota2';


export default function Teste() {
  const [text, setText] = useState('');
 
  const[idade, setIdade] = useState(0);


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <View style={{ marginTop: 20 }} >

        <MeuInput 
             placeholder='Digite algo aqui' 
             onChangeText={(text) => setText(text)} 
        />

      </View>

      <View style={{ marginTop: 20 }} >
        <MeuBotao2
            onPress={() => alert(text)} title="Clique Aqui" 
          />
      </View>

      <View style={{ marginTop: 20 }} >
        <Text>Você digitou: {text}</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <MeuInput 
             placeholder='Digite sua Idade' 
             onChangeText={(valor) => setIdade(Number(valor))} 
        />
      </View>

      <View style={{ marginTop: 20 }}>
       <Text>Sua idade é: {idade}</Text>
        </View>
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
