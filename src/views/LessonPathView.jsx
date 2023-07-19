import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BackgroundImage, LessonCard } from "../components";
import { themeStyles as theme } from "../styles";

export function LessonPathView() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.containerLessonPathView}>
      <View>
        <BackgroundImage
          imageUrl={require("../assets/back-girl-beach.png")}
          styleImage={{ width: "55%", marginTop: 0 }}
        />
      </View>

      <View>
        <Text style={styles.header}>BIENVENNID@ A RINCON TEST</Text>
        <Text style={styles.text}>
          Aqui encontraras tips, teoria e ideas sobre el cuidado de tu pelo afro
          y lo mas genial es que podras poner a prueba tus conocimientos
        </Text>
      </View>


      <LessonCard 
        title="TIPOS DE PELO Y DE CORTES"
        textContent="En esta leccion aprenderas muchas cosas para tu estilo."
        urlImage={require("../assets/girl-desk-1.png")}
      />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerLessonPathView: {
    ...theme.containerMain,
    paddingBottom: 0,
    backgroundColor: '#A1AFC9'
  },
})
