import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { assets } from "../assets";
import { BackgroundImage, LogoCard } from "../components";
import { themeStyles as theme } from "../styles";

export function HomeView() {
  return (
    <SafeAreaView>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.containerHomeView}>
        <View>
          <BackgroundImage
            imageUrl={assets["back-girl-beach"]}
            styleImage={{ width: "55%", marginTop: 0 }}
          />
        </View>

        <View>
          <Text style={styles.header}>BIENVENNID@ A RINCON TEST</Text>
          <Text style={styles.text}>
            Aqui encontraras tips, teoria e ideas sobre el cuidado de tu pelo
            afro y lo mas genial es que podras poner a prueba tus conocimientos
          </Text>
        </View>

        <LogoCard
          textHeader="Aprende"
          textContent="Ve y aprende sobre tu pelo y luago pon a prueba tus conocimientos"
          urlImage={assets["girl-wich-book-1"]}
          path="Lecciones"
        />

        <LogoCard
          textHeader="Pruebas"
          textContent="Ve y  pon a prueba tus conocimientos"
          urlImage={assets["girl-wich-book-1"]}
        />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerHomeView: {
    ...theme.containerMain,
    paddingBottom: 0,
  },
  header: {
    ...theme.title1,
    textAlign: "center",
  },
  text: {
    ...theme.text1,
    textAlign: "center",
  },
});
