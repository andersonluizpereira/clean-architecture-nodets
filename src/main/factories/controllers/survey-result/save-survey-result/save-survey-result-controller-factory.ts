import { Controller } from '@/presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/log-controller-decorator-factory'
import { makeDbLoadSurveyById } from '@/main/factories/usecases/survey/load-survey-by-id/db-load-survey-by-id-factory'
import { makeDbSaveSurveyResult } from '@/main/factories/usecases/survey-result/db-save-survey-result-factory'
import { SaveSurveyResultController } from '@/presentation/controllers/survey-result/save-survey-result/save-survey-result-controller'

export const makeSaveSurveyResultSurveysController = (): Controller => {
  const controller = new SaveSurveyResultController(makeDbLoadSurveyById(), makeDbSaveSurveyResult())
  return makeLogControllerDecorator(controller)
}