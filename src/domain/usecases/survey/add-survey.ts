import { SurveyModel } from '../../model/survey'
export type AddSurveyModel = Omit<SurveyModel, 'id'>

export interface AddSurvey {
  add(account: AddSurveyModel): Promise<void>
}
