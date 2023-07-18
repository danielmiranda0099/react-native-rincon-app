import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { HEIGHT, themeStyles as theme } from "../../styles";

export function LogoCard({textHeader="", textContent="", urlImage=""}) {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Lecciones')}>
    <View style={styles.containerCard}>
      <View style={styles.cardContainerText}>
        <Text style={styles.cardTextHeader}>{textHeader}</Text>
        <Text style={styles.cardText}>
          {textContent}
        </Text>
      </View>

      <View style={styles.containerCardImage}>
        <Image style={styles.cardImage} source={urlImage}  />
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    display: "flex",
    flexDirection: "row",
    width: "95%",
    height: HEIGHT * 0.14,
    borderRadius: 24,
    marginTop: 40,
    padding: 5,
    paddingHorizontal: 10,
    paddingLeft: 15,
    backgroundColor: "white",
  },
  cardContainerText: {
    width: "60%",
  },
  cardTextHeader: {
    ...theme.title2,
    paddingBottom: 5, 
  },
  cardText: {
    ...theme.text2,
    lineHeight: 18,
  },
  containerCardImage: {
    flex: 1,
    position: 'relative',
    // backgroundColor: 'blue',
  },
  cardImage: {
    width: '125%',
    height: 'auto',
    aspectRatio: 1 / 1,
    position: 'absolute',
    top: '-60%',
    right: '-10%',
    // backgroundColor: 'red',
  }
});
