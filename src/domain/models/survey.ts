export type SurveyModel = {
  id: string
  question: string
  answers: SurveyAnsWerModel[]
  date: Date
}

type SurveyAnsWerModel = {
  image?: string
  answer: string
}
