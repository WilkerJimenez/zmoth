import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, View, Image, Text } from "react-native";
import Inicio from "./src/screens/Inicio";
import "./src/styles/global.css";

const color = "#c8efd";
export default function App() {
  return (
    <View className="w-full h-full" style={{ backgroundColor: "#c8efd1" }}>
      <View className="absolute -top-10 -right-20 bg-[#ffffff] rounded-full p-40"></View>
      <View className="absolute top-72 right-20 bg-[#ffffff] rounded-full p-28"></View>

      <SafeAreaProvider>
        <Inicio />
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({});
