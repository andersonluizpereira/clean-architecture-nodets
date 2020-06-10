import { SurveyResultModel } from '@/domain/model/survey-result'
export type SaveSurveyResultModel = Omit<SurveyResultModel, 'id'>

export interface SaveSurveyResult {
  add(account: SaveSurveyResultModel): Promise<SurveyResultModel>
}
