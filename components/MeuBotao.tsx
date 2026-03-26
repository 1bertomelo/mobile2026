import { Button } from 'react-native';


type props = {
  onPress: () => void;
  title: string;
}

export default function MeuBotao({ onPress, title }: props) {
  return (
    <Button onPress={onPress} title={title} />
  );
}

