import { Image, StyleSheet, View } from 'react-native';

export function BackgroundImage({imageUrl='', styleImage={}}) {

  const styleDinamic = {
    image: {
      width: styleImage.width || '100%',
      ...styleImage,
    }
  }

  return (
    <View style={styles.container}>
      <Image source={imageUrl} style={[styles.image, styleDinamic.image]} resizeMode="contain" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    height: 'auto',
    aspectRatio: 1,
  },
});