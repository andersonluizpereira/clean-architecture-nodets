import { SurveyModel } from '../../model/survey'

export interface LoadSurveyById {
  loadById (id: string): Promise<SurveyModel>
}
