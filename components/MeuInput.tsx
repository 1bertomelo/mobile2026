import { StyleSheet, TextInput } from 'react-native';


type props = {  
placeholder: string;
  onChangeText: (text: string) => void;  
}

export default function MeuInput({ placeholder, onChangeText }: props) {
  return (
    <TextInput 
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
}


const styles = StyleSheet.create({
  input : {
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '80%',
  }
});