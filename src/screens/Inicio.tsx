import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Grafico from "./../components/grafico";
import Contador from "./../components/contador";
import Movimientos from "./../components/movimientos";

export default function Inicio() {
  const insets = useSafeAreaInsets();
  return (
    <View
      className="px-10 w-full h-full"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <View
        className="w-full h-full flex-col"
      >
        <Grafico />
        <Contador />
        <Movimientos />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
