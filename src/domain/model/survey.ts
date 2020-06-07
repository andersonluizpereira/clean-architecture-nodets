export interface SurveyModel {
  id: string
  question: string
  answers: SurveyAnsWerModel[]
  date: Date
}

export interface SurveyAnsWerModel {
  image?: string
  answer: string
}
