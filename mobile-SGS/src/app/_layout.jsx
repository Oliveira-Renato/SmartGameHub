import { Slot } from "expo-router";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  });

  return fontsLoaded ? <Slot /> : null;
}
