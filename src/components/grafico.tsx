import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

export default function Grafico() {
  const [font] = useFonts({
    raleway_medium: require("./../../assets/fonts/raleway_medium.ttf"),
    raleway_regular: require("./../../assets/fonts/raleway_regular.ttf"),
  });
  return (
    <View className="items-center pt-10 z-10 border-b-2 pb-32">
      <View className="w-full items-center p-20 border-2">
        <Text className="text-2xl" style={styles.texts}>
          Grafico
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  texts: {
    fontFamily: "raleway_regular",
  },
  countingText: {
    fontFamily: "raleway_medium",
  },

  countingRed: {
    fontFamily: "raleway_medium",
    color: "#ff5733",
  },

  countingGreen: {
    fontFamily: "raleway_medium",
    color: "#78d98f",
  },
});
