import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, TouchableOpacity , Alert, Text} from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';


export default function Login() {
  //    variavel   , funcao para atualizar a variavel
const [senhaVisivel, setSenhaVisivel] = useState(false);
const [usuario, setUsuario] = useState('');
const [senha, setSenha] = useState('');

 const router = useRouter();

  // Função chamada ao pressionar "Entrar"
  const handleLogin = () => {
    if (usuario === 'Admin' && senha === '123') {
      // Navega para /home passando o nome do usuário como parâmetro
      router.push({
        pathname: '/home',
        params: { nome: usuario },
      });
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInterno}>
        <TextInput placeholder="Usuário" style={styles.inputUsuario} />
      </View>
         <View style={styles.containerInterno}>
        <TextInput placeholder="Senha" style={styles.inputUsuario}
        secureTextEntry={senhaVisivel} />   
        <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
          <Text>{senhaVisivel?"🙈":"👁️"}</Text>
        </TouchableOpacity>
      </View>
       <View style={styles.containerInternoBotao}>
          <TouchableOpacity style={styles.botao} onPress={handleLogin}>
                  <Text style={styles.botaoTexto}>Entrar</Text>
                </TouchableOpacity>
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
  containerInternoBotao: {
    flexDirection: 'row', // Alinha o input e o botão em linha
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 16,
  },
  botao: {
    width: '100%',
    backgroundColor: '#e94560', // Vermelho vibrante para o CTA
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 12,
    // Sombra colorida no botão
    shadowColor: '#e94560',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
