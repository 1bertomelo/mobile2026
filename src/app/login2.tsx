// app/index.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';

// ✅ Credenciais fixas (sem back-end por enquanto)
const USUARIO_VALIDO = 'admin';
const SENHA_VALIDA = '123';

export default function LoginScreen() {
  // Estado para armazenar o que o usuário digita
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  // Controla se a senha está visível ou oculta
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  // Hook de navegação do Expo Router
  const router = useRouter();

  // Função chamada ao pressionar "Entrar"
  const handleLogin = () => {
    if (usuario === USUARIO_VALIDO && senha === SENHA_VALIDA) {
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
    // KeyboardAvoidingView evita que o teclado cubra os campos de input
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.card}>

        {/* Ícone decorativo e título */}
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>🔐</Text>
        </View>
        <Text style={styles.titulo}>Bem-vindo!</Text>
        <Text style={styles.subtitulo}>Faça login para continuar</Text>

        {/* Campo de Usuário */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Usuário</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu usuário"
            placeholderTextColor="#aaa"
            value={usuario}
            onChangeText={setUsuario}   // Atualiza o estado a cada tecla
            autoCapitalize="none"       // Não capitaliza automaticamente
          />
        </View>

        {/* Campo de Senha com olho mágico */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Senha</Text>
          <View style={styles.senhaContainer}>
            <TextInput
              style={styles.inputSenha}
              placeholder="Digite sua senha"
              placeholderTextColor="#aaa"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={!senhaVisivel} // true = oculta, false = mostra
            />
            {/* Botão do olho mágico 👁 */}
            <TouchableOpacity
              onPress={() => setSenhaVisivel(!senhaVisivel)}
              style={styles.olhoBtn}
            >
              <Text style={styles.olhoIcon}>
                {senhaVisivel ? '🙈' : '👁️'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Botão de Login */}
        <TouchableOpacity style={styles.botao} onPress={handleLogin}>
          <Text style={styles.botaoTexto}>Entrar</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}

// ─── ESTILOS ──────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e', // Fundo escuro azul-marinho
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    backgroundColor: '#16213e', // Card levemente mais claro que o fundo
    borderRadius: 24,
    padding: 32,
    // Sombra (Android usa elevation, iOS usa shadow*)
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    fontSize: 52,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#e2e8f0',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: 28,
  },
  inputWrapper: {
    marginBottom: 16,
  },
  label: {
    color: '#94a3b8',
    fontSize: 13,
    marginBottom: 6,
    fontWeight: '600',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: '#0f3460', // Azul escuro para os inputs
    color: '#e2e8f0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#1e4d8c',
  },
  // Container que envolve o input de senha + botão do olho
  senhaContainer: {
    flexDirection: 'row',       // Coloca input e ícone lado a lado
    alignItems: 'center',
    backgroundColor: '#0f3460',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1e4d8c',
  },
  inputSenha: {
    flex: 1,                    // Ocupa todo o espaço disponível
    color: '#e2e8f0',
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
  },
  olhoBtn: {
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  olhoIcon: {
    fontSize: 20,
  },
  botao: {
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