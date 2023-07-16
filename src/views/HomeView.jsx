import { StyleSheet, Text, View } from "react-native";
import { BackgroundImage } from "../components";

export function HomeView() {
  return (
    <View style={styles.container}>
      <BackgroundImage
        imageUrl={require("../assets/back-girl-beach.png")}
        styleImage={{ width: "55%", marginTop: 0 }}
      />

      <View>
        <Text style={styles.title1}>BIENVENNID@ A RINCON TEST</Text>
        <Text style={styles.text}>
          Aqui encontraras tips, teoria e ideas sobre el cuidado de tu pelo afro
          y lo mas genial es que podras poner a prueba tus conocimientos
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE6E6',
  },
  title1: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    color: '#5f6368',
    textAlign: 'center',
    lineHeight: 22,
  },
});
