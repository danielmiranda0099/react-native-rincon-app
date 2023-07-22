import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { assets } from "../assets";
import { SIZES, themeStyles as theme } from "../styles";

export function LessonCard({
  titleCard = "",
  isFlip = false,
  id,
}) {

  const navigation = useNavigation();
  
  const styles = {
    ...stylesInit,
    containerCard: {
      ...stylesInit.containerCard,
      flexDirection: isFlip ? "row-reverse" : "row",
    },
  };

  const handleClick = () => {
    navigation.navigate("Leccion", {id});
  }

  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <View style={styles.containerCard}>
        <View style={styles.containerCardBodyInfo}>
          <Text style={styles.cardText}>{titleCard}</Text>
        </View>

        <View style={styles.containerCardImage}>
          <Image style={styles.cardImage} source={assets["girl-desk-1"]} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const stylesInit = StyleSheet.create({
  containerCard: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    width: "95%",
    borderRadius: 100,
    marginBottom: 80,
    backgroundColor: "white",
    borderColor: "#f0b22d",
    borderWidth: 8,
    padding: 8,
  },
  containerCardBodyInfo: {
    width: "65%",
    height: (SIZES.medium * 1.1) * 4,
    paddingLeft: 28,
    paddingRight: 5,
    paddingVertical: 0,
    borderRadius: 100,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    
  },
  cardText: {
    ...theme.text1,
    lineHeight: 18,
    textAlign: 'center',
  },
  containerCardImage: {
    flex: 1,
    position: "relative",
    // backgroundColor: 'blue',
  },
  cardImage: {
    width: "130%",
    height: "auto",
    aspectRatio: 1 / 1,
    position: "absolute",
    // top: "-110%",//sube mucho -95 usar
    top: "-95%",
    left: "-15%",
    // backgroundColor: 'red',
    borderRadius: 100,
  }
});
