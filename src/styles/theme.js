import { Dimensions, StyleSheet } from "react-native";

export const HEIGHT = Dimensions.get("window").height;

export const COLORS = {
  gray1: '#3C4043',
  gray2: '#6B6B6B',

  pink1: '#FFE6E6',
}

export const SIZES = {
  xSmall: 15,
  
  medium: 17,
  xMedium: 19,

  large: 22.5,
  xlarge: 26,
}

export const themeStyles = StyleSheet.create({
  containerMain: {
    flex: 1,
    minHeight: Dimensions.get("window").height,
    backgroundColor: COLORS.pink1,
    alignItems: 'center'
  },
  title1: {
    fontSize: SIZES.xlarge,
    fontWeight: 'bold',
    color: COLORS.gray1,
  },
  title2: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.gray1
  },
  title3: {
    fontSize: SIZES.xMedium,
    fontWeight: 'bold',
  },
  text1: {
    fontSize: SIZES.medium,
    color: COLORS.gray2,
    lineHeight: 22,
  },
  text2: {
    fontSize: SIZES.xSmall,
    color: COLORS.gray2,
    lineHeight: 22,
  },
});