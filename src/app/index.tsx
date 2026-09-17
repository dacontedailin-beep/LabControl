import { text, view, stylesheet } from "react-native";

export default function App(){
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Asistencia</text>
    </View>
  );
}
const styles = stylesheet.create({
  container: {
    flex: 1,
    justifycontent: "center",
    alignItems: "center",
    backgroundcolor: "#11c1c1",
  },
  text: {
    color: "#fff",
    fontssize: 24,
    fontweight: "bold",
  },
});