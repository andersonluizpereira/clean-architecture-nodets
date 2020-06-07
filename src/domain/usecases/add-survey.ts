export interface AddSurveyModel {
  question: string
  answers: SurveyAnsWer[]
  date: Date
}

export interface SurveyAnsWer {
  image?: string
  answer: string
}

export interface AddSurvey {
  add(account: AddSurveyModel): Promise<void>
}
