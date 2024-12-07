import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

const cNames: any = ["Monto disponible", "Gastos realizados"];

export default function Contador() {
  const [font] = useFonts({
    raleway_medium: require("./../../assets/fonts/raleway_medium.ttf"),
    raleway_regular: require("./../../assets/fonts/raleway_regular.ttf"),
  });
  const generateItems = cNames.map((n) => (
    <View
      key={n}
      className="flex-col items-center justify-center p-4 rounded-md"
    >
      <Text
        className="text-5xl font-extrabold"
        style={{
          color: n !== "Monto disponible" ? "#ff5733" : "#78d98f",
          fontFamily: "raleway_medium",
        }}
      >
        100
      </Text>
      <Text
        className="text-lg text-center"
        style={{ fontFamily: "raleway_medium" }}
      >
        {n}
      </Text>
    </View>
  ));

  return (
    <View
      className="flex-col gap-4 pt-12 pb-12 border-b-2"
    >
      <View className="flex-row gap-2 justify-center w-full">
        {generateItems}
      </View>
      <View className="flex-col items-center justify-center p-4 rounded-md">
        <Text
          className="text-5xl font-extrabold"
          style={{ fontFamily: "raleway_medium" }}
        >
          100
        </Text>
        <Text
          className="text-lg text-center"
          style={{ fontFamily: "raleway_medium" }}
        >
          Gastos totales
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  texts: {
    fontFamily: "raleway_regular",
  },
});
