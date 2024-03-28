import { Text, View } from "react-native";
import { styles } from "./styles";
import { Games } from "@/components/Games";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Smart Games {"\n"}
        <Text>Store</Text>
      </Text>
      <Text>Explore, Compre e Divirta-se!</Text>

      <Games />
    </View>
  );
}
