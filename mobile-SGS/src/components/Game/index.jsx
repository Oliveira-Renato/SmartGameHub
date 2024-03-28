import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function Game() {
  return (
    <View>
      <Image 
        style={styles.image}
        source={{uri: "https://upload.wikimedia.org/wikipedia/pt/b/bf/Overwatch_logo.jpg"}}
      />
      <Text>Nome do ogo</Text>
    </View>
  )
}