import {StyleSheet} from "react-native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import LockScreen from "./src/screens/LockScreen";

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <LockScreen />
      <StatusBar style="dark" />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
