import { SurveyAnsWerModel } from '../model/survey'
export type AddSurveyModel = {
  question: string
  answers: SurveyAnsWerModel[]
  date: Date
}

export interface AddSurvey {
  add(account: AddSurveyModel): Promise<void>
}
