import { Image, StyleSheet, Text, View } from 'react-native';
import { HEIGHT, themeStyles as theme } from '../styles';

export function LessonCard({title="", textContent="", urlImage, path=null, isFlip=true}) {

  const styles = {
    ...stylesInit,
    containerCard: {
      ...stylesInit.containerCard,
      flexDirection: isFlip ? 'row-reverse' : 'row'
    },
    cardTitle: {
      ...stylesInit.cardTitle,
      left: isFlip ? '-20%'  : '-28%',
    },
    containerCardBodyInfo: {
      ...stylesInit.containerCardBodyInfo,
      borderTopRightRadius: isFlip ? 24 : 0,
      borderBottomRightRadius: isFlip ? 24 : 0,
      borderTopLeftRadius: isFlip ? 0 : 24,
      borderBottomLeftRadius: isFlip ? 0 : 24,
      paddingLeft: isFlip ? 35: 15,
    },
    CardBodyInfoPath: {
      ...stylesInit.CardBodyInfoPath,
      right: isFlip ? '50%' : '-25%',
    }
  }

  return (
    <View style={styles.containerCard}>
      <View style={styles.containerCardBodyInfo}>
        <Text style={styles.cardText}>
          {textContent}
        </Text>
        <View style={styles.CardBodyInfoPath}></View>
      </View>

      <View style={styles.containerCardImage}>
        <Image style={styles.cardImage} source={urlImage}  />
        <View style={styles.cardTitle}>
          <Text style={styles.cardTitleText}>{title}</Text>
        </View>
      </View>
    </View>
  )
}

const stylesInit = StyleSheet.create({
  containerCard: {
    display: "flex",
    width: "95%",
    height: HEIGHT * 0.14,
    borderRadius: 24,
    padding: 5,
    paddingHorizontal: 10,
    paddingLeft: 15,
    // backgroundColor: "white",
  },
  containerCardBodyInfo: {
    width: '65%',
    position: 'relative',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  cardText: {
    ...theme.text2,
    lineHeight: 18,
  },
  CardBodyInfoPath: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    height: HEIGHT * 0.12,
    zIndex: -1,
  },
  containerCardImage: {
    flex: 1,
    position: 'relative',
    // backgroundColor: 'blue',
  },
  cardImage: {
    width: '110%',
    height: 'auto',
    aspectRatio: 1 / 1,
    position: 'absolute',
    top: '-30%',
    // backgroundColor: 'red',
  },
  cardTitle: {
    position: 'absolute',
    bottom: '-30%',
    width: '150%',
    padding: 5,
    borderRadius: 24,
    // backgroundColor: '#CCEBFF',
    backgroundColor: '#FFE6E6',
  },
  cardTitleText: {
    ...theme.text2,
    textAlign: 'center',
    fontWeight: 'bold',
    color: "#171717",
  },
});