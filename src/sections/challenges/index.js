import { challenge1 } from "./challenge1/challenge1";

const challenges = [
  {
    ...challenge1
  }
]

export function getChallenge(id, challengeNumber=1, challengePerPage=1){
  const challenge = challenges.find( (challenge) => challenge.id == id)//TODO: REFACTOR

  if(!challenge){
    return null;
  }

  const start = (challengeNumber - 1) * challengePerPage;
  const end = start + challengePerPage;

  const question = challenge.questions.slice(start, end);

  const totalQuestions = challenge.questions.length
  const totalPagination = Math.ceil(totalQuestions / challengePerPage);
  const isNext = challengeNumber < totalPagination;
  console.log(challengeNumber, totalPagination)

  const nextUrl = isNext ? challengeNumber + 1 : totalPagination;

  console.log("get Challenge", JSON.stringify(question, null, 2));
  return {
    challengeNumber,
    totalQuestions,
    question: question[0],
    isNext,
    nextUrl,
  };
}