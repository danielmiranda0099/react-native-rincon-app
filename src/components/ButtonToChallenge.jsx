import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text } from "react-native";

import uuid from "react-native-uuid";
import { assets } from "../assets";

export function ButtonToChallenge({lessonGroup}) {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Challenge", {
          id: lessonGroup[0].challenge,
        })
      }
      key={uuid.v4()}
      style={styles.containerButton}
    >
      <Image source={assets["button-lesson"]} style={styles.imageBotton} resizeMode="contain"/>
      <Text style={styles.text}>Pon A Prueba Esta Ruta</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  containerButton: {
    width: '100%',

    marginVertical: 100,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  imageBotton: {
    width: '100%',
    height: 'auto',
    aspectRatio: 2 / 1,
    position: 'absolute',
    // backgroundColor: 'blue'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white'
  }
})
