import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, TouchableOpacity , Button, Text} from 'react-native';
import { useState } from 'react';



export default function Login() {
  //    variavel   , funcao para atualizar a variavel
const [senhaVisivel, setSenhaVisivel] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.containerInterno}>
        <TextInput placeholder="Usuário" style={styles.inputUsuario} />
      </View>
         <View style={styles.containerInterno}>
        <TextInput placeholder="Senha" style={styles.inputUsuario}
        secureTextEntry={senhaVisivel} />   
''      <Button title="Olho" onPress={() => setSenhaVisivel(!senhaVisivel)} />  
      </View>
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
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,

  },
  containerInterno: {
    flexDirection: 'row', // Alinha o input e o botão em linha
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 16,
    marginBottom: 16,
  },
});
