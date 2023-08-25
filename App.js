import { StyleSheet, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Home } from "./screens/Home";

export default function App() {
  return (
      <SafeAreaProvider style={styles.container}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
            <Home />
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  }
});
