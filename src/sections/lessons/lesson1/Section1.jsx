import { StyleSheet, Text, View } from "react-native";
import { SIZES, themeStyles as theme } from "../../../styles";


export function Section1() {
  return (
    <View style={styles.containerLesson}>
      <Text style={styles.text}>
        El corte de pelo 'shag' tiene muchas versiones y puede presentarse en
        diferentes largos, pero hay un común denominador que lo distingue de
        entre el resto de los estilos de cabello: sus múltiples capas que
        comienzan desde las más cortas en la parte superior de la melena hasta
        las puntas. Es muy versatil,pues se puede adaptar para cualquier largo e
        incluso combinar con diferentes estilos. es un corte de pelo que
        inmediatamente aporta movimiento , volumen y vivacidad a tu melena.
      </Text>
      <Text style={styles.text}>
        Podemos dejarte más información de este estilo en historias, déjanos tus
        comentarios 👇🏽.Es muy versatil,pues se puede adaptar para cualquier
        largo e incluso combinar con diferentes estilos. es un corte de pelo que
        inmediatamente aporta movimiento , volumen y vivacidad a tu melena.
        Podemos dejarte más información de este estilo en historias, déjanos tus
        comentarios 👇🏽.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLesson: {
    padding: 15,
  },
  text: {
    ...theme.text2,
    textAlign: "justify",
    marginBottom: SIZES.medium,
  },
});
