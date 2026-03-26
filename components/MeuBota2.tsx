import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type props = {
  onPress: () => void;
  title: string;
}

export default function MeuBotao2({ onPress, title }: props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  button : {
    height: 40,    
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    margin: 10,
     backgroundColor: 'blue',
  },
  text:{
    color: 'white',
     fontSize: 12,
      fontWeight: 'bold',
       textAlign: 'center',
  }
});