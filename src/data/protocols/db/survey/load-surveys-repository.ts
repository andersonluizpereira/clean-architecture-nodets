import { SurveyModel } from '../../../../domain/model/survey'

export interface LoadSurveyRepository {
  loadAll(): Promise<SurveyModel[]>
}
