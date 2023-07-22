import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import { assets } from "../assets";
import { BackgroundImage, LessonCard } from "../components";
import { lessons } from "../sections/lessons";
import { themeStyles as theme } from "../styles";

export function LessonPathView({navigation}) {


  const handleClickNabar = (path) => {
    navigation.navigate(path);
  }

  return (
    <SafeAreaView>
    <ScrollView showsVerticalScrollIndicator={false}>
      
      <View style={styles.containerLessonPathView}>
      <View style={styles.containerNavbar}>
        <Pressable onPress={() => handleClickNabar('Lecciones')}>
          <Text>Lecciones</Text>
        </Pressable>
        <Pressable onPress={() => handleClickNabar('Challenges')}>
          <Text>Pruebas</Text>
        </Pressable>
      </View>
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

        {lessons.map((item, index) => (
          <LessonCard
            titleCard={item.title}
            isFlip={index % 2 === 0 ? true : false}
            id= {item.id}
            key={index}
          />
        ))}
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerLessonPathView: {
    ...theme.containerMain,
    paddingBottom: 0,
    backgroundColor: "#A1AFC9",
  },
  containerNavbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 40,
    backgroundColor: 'white'
  },
});
