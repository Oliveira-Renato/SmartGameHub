import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { Game } from "../Game";

export function Games() {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {Array.from({length: 8}).map((item, index) => (
        <Game key={index} />
      ))}
    </ScrollView>
  )
}