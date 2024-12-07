import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

export default function Movimientos() {
  return (
    <View className="items-center pt-12">
      <View className="flex-col w-full gap-10">
        <View className="p-10">
          <View className="flex-row justify-between">
            <View className="text-bold">
              <Text className="text-lg" style={styles.texts}>
                Luz
              </Text>
            </View>
            <View className="">
              <Text
                className="text-lg"
                style={{ fontFamily: "raleway_medium", color: "#ff5733" }}
              >
                -2000RD$
              </Text>
            </View>
          </View>
          <View className="w-full">
            <Text className="text-right text-lg" style={styles.texts}>
              10/12/2024
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  texts: {
    fontFamily: "raleway_regular",
  },
});
