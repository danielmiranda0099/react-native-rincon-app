import { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export function ButtonAnswer({letter, response, isTrue, isNext,checkAnswer = () => {}}) {
  const [isSelected, setIsSelected] = useState(false)

  const handleOnPress = () => {
    if(isNext) return

    setIsSelected(true);
    checkAnswer();
  }

  const getColor = isTrue ? 'green' : 'red';

  const styles = {
    ...stylesInit,
    containerButton: {
      ...stylesInit.containerButton,
      backgroundColor: isSelected? getColor: '#A796EB' ,
    }
  }

  return (
    <Pressable style={styles.containerButton} onPress={handleOnPress}>
      <Text>{letter}</Text>
      <Text style={styles.response}>{response}</Text>
    </Pressable>
  )
}

const stylesInit = StyleSheet.create({
  containerButton: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: 10,
  },
  response: {
    flex: 1,
    textAlign: 'center',
    
  }
})

