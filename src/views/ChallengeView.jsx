import { useEffect, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ButtonAnswer } from "../components";
import { getChallenge } from "../sections/challenges";
import { SIZES, themeStyles as theme } from "../styles";

export function ChallengeView({ route: { params } }) {
  const [challenge, setChallenge] = useState(null);
  const [isNextQuestion, setIsNextQuestion] = useState(false);
  const [isTrue, setIsTrue] = useState(null);

  console.log(challenge);
  const LETTER = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
  };

  const checkAnswer = (response) => {
    if(isNextQuestion) return
    
    console.log(response, challenge?.questions.correctAnswer);
    console.log("La Respuesta Es:", response.toLowerCase() == challenge.questions.correctAnswer.toLowerCase())
    const checkAnswer = response.toLowerCase() == challenge.questions.correctAnswer.toLowerCase()
    setIsTrue(checkAnswer);
    setIsNextQuestion(true);
  };

  const handleNext = () => {
    if(isNextQuestion && challenge.isNext){
      const newChallenge = getChallenge(params.id, challenge.nextUrl);
      setChallenge(newChallenge);
      setIsNextQuestion(false)
    }
  };

  useEffect(() => {
    const challenge = getChallenge(params.id);
    setChallenge(challenge);
  }, [params.id]);

  const styles  = {
    ...stylesInit,
    progressBar: {
      ...stylesInit.progressBar,
      width: challenge ?  challenge.progress : '0%',
    }
  }

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerChallenge}>
          <View style={styles.containerProgress}>
            <View style={styles.progressBar}></View>

            <View style={styles.containerPercentage}>
            <Text style={styles.percentage}>{challenge?.progress}</Text>
            </View>
          </View>

          <View style={styles.containerQuestion}>
            <Text style={styles.questionText}>
              {challenge?.questions.question}
            </Text>
          </View>

          <View style={styles.containerResponses}>
            {challenge?.questions?.responses?.map((response, index) => (
              <ButtonAnswer
                letter={LETTER[index]}
                response={response}
                isTrue={isTrue}
                isNext={isNextQuestion}
                checkAnswer={() => checkAnswer(response)}
                key={response}
              />
            ))}
          </View>

          <Pressable style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Continuar</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const stylesInit = StyleSheet.create({
  containerChallenge: {
    ...theme.containerMain,
    paddingTop: 110,
    paddingHorizontal: 30,
    alignItems: "center",
  },
  containerProgress: {
    width: '100%',
    height: 30,
    top: 0,
    marginTop: 20,
    position: 'absolute',
    backgroundColor: 'pink',
  },
  progressBar: {
    width: '0%',
    height: 30,
    backgroundColor: '#A796EB',
    
  },
  containerPercentage: {
    width: '100%',
    height: 30,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  containerQuestion: {
    backgroundColor: "pink",
    width: "100%",
    height: 150,
    alignItems: "center",
    marginBottom: 80,
  },
  questionText: {
    ...theme.title3,
    textAlign: "center",
  },
  containerResponses: {
    display: "flex",
    gap: 25,
    width: "100%",
  },
  button: {
    padding: 10,
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginTop: 90,
    backgroundColor: "#1976D2",
  },
  buttonText: {
    fontSize: SIZES.xMedium,
    textAlign: "center",
    color: "white",
  },
});



