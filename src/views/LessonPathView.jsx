import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import uuid from "react-native-uuid";

import React from "react";
import { assets } from "../assets";
import { BackgroundImage, ButtonToChallenge, LessonCard } from "../components";
import { lessonsPath } from "../sections/lessons";
import { themeStyles as theme } from "../styles";

export function LessonPathView({ navigation }) {
  const handleClickNabar = (path) => {
    navigation.navigate(path);
  };
  console.log(uuid.v4());
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerLessonPathView}>
          <View style={styles.containerNavbar}>
            <Pressable onPress={() => handleClickNabar("Lecciones")}>
              <Text>Lecciones</Text>
            </Pressable>
            <Pressable onPress={() => handleClickNabar("Challenges")}>
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
              afro y lo mas genial es que podras poner a prueba tus
              conocimientos
            </Text>
          </View>

          {lessonsPath.map((lessonGroup) => (
            <React.Fragment key={uuid.v4()}>
              {lessonGroup.map(
                (item, index) =>
                  item.title && (
                    <LessonCard
                      titleCard={item.title}
                      isFlip={index - (1 % 2) === 0 ? true : false}
                      id={item.id}
                      key={uuid.v4()}
                    />
                  )
              )}
              <ButtonToChallenge  
                lessonGroup={lessonGroup}
              />
            </React.Fragment>
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
    backgroundColor: "#f9d2e4",
  },
  containerNavbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 40,
    backgroundColor: "white",
  },
});
