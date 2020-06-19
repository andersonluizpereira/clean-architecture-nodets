export type SurveyResultModel = {
  surveyId: string
  question: string
  answers: SurveyResultAnsWerModel[]
  date: Date

}

type SurveyResultAnsWerModel = {
  image?: string
  answer: string
  count: number
  percent: number
  isCurrentAccountAnswer: Boolean
}
