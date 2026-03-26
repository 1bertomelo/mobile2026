import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, TouchableOpacity , Text} from 'react-native';
import { useState } from 'react';


export default function Login() {
  

  return (
    <View style={styles.container}>
      <TextInput placeholder="Usuário" style={styles.inputUsuario} />
      <TextInput placeholder="Senha" style={styles.inputUsuario} secureTextEntry={true} />   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', // Alinha as caixas em linha
  },
  inputUsuario:{
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 10,

  }
});
