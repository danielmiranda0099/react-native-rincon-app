import { Image, StyleSheet, View } from 'react-native';

export function BackgroundImage({imageUrl='', styleImage={}, styleContentImage={}}) {

  const dinamicStyles = {
    image: {
      width: styleImage.width || '100%',
      ...styleImage,
    }
  }

  return (
    <View style={[styles.container, styleContentImage]}>
      <Image source={imageUrl} style={[styles.image, dinamicStyles.image]} resizeMode="contain" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // backgroundColor: 'red',
  },
  image: {
    height: 'auto',
    aspectRatio: 1 / 1,
    // backgroundColor: 'blue',
  },
});