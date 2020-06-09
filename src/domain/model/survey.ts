export type SurveyModel = {
  id: string
  question: string
  answers: SurveyAnsWerModel[]
  date: Date
}

export type SurveyAnsWerModel = {
  image?: string
  answer: string
}
