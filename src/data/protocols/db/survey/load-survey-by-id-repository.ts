import { SurveyModel } from '@/domain/model/survey'

export interface LoadSurveyByIdRepository {
  loadById(id: string): Promise<SurveyModel>
}
