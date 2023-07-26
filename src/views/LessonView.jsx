import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { assets } from "../assets";
import { pagination as lessons } from "../sections/lessons";
import { HEIGHT, SIZES, themeStyles as theme } from "../styles";

export function LessonView({ navigation, route: { params } }) {
  const [dataSection, setDataSection] = useState(null);

  const handleClickNext = () => {
    if (dataSection.isNext) {
      const newdataSection = lessons(params.id, dataSection.nextUrl);
      setDataSection(newdataSection);
    }
  };

  const handleClickPrevious = () => {
    if (dataSection.isPrevious) {
      const newdataSection = lessons(
        params.id,
        dataSection.previousUrl
      );
      setDataSection(newdataSection);
    }
  };

  useEffect(() => {
    const dataSection = lessons(params.id);
    setDataSection(dataSection);
  }, [params.id]);

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.lessonViewContainer}>
          <View style={styles.containerProgress}>
            <Text style={styles.progressText}>
              {dataSection?.pageNumber}/{dataSection?.totalSections}
            </Text>
          </View>
          <View style={styles.containerBanner}>
            <Image
              source={assets[dataSection?.section.banner]}
              style={styles.banner}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.articleTitle}>
            {dataSection?.section.title}
          </Text>

          {dataSection?.section.content()}

          <View style={styles.containerButtons}>
            <Pressable style={styles.button} onPress={handleClickPrevious}>
              <Text style={styles.textButton}>Anterior</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleClickNext}>
              <Text style={styles.textButton}>Continuar</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  lessonViewContainer: {
    ...theme.containerMain,
  },
  containerBanner: {
    width: "100%",
    maxHeight: HEIGHT * 0.4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  banner: {
    width: "130%",
    height: "auto",
    aspectRatio: 11 / 8,
  },
  articleTitle: {
    ...theme.title1,
    textAlign: "center",
  },
  button: {
    elevation: 8,
    minWidth: "43%",
    backgroundColor: "#FCB1D8",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  containerButtons: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  textButton: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  containerProgress: {
    position: "absolute",
    paddingVertical: 10,
    top: 0,
    right: 0,
    width: "100%",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  progressText: {
    fontSize: SIZES.medium,
    textAlign: "center",
    padding: 13,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "pink",
    borderRadius: 100,
  },
});
