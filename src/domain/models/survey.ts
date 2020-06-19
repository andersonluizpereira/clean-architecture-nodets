export type SurveyModel = {
  id: string
  question: string
  answers: SurveyAnsWerModel[]
  date: Date
  didAnswer?: Boolean
}

type SurveyAnsWerModel = {
  image?: string
  answer: string
}
