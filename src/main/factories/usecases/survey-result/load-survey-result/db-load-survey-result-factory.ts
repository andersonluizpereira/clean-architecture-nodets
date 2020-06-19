import { LoadSurveyResult } from '@/domain/usecases/survey-result/load-survey-result'
import { SurveyResultMongoRepository } from '@/infra/db/mongodb/survey-result/survey-result-mongo-repository'
import { SurveyMongoRepository } from '@/infra/db/mongodb/survey/survey-mongo-repository'
import { DbLoadSurveyResult } from '@/data/usecases/survey-result/load-survey-result/db-load-survey-result'

export const makeDbLoadSurveyResult = (): LoadSurveyResult => {
  const surveResultMongoRepository = new SurveyResultMongoRepository()
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadSurveyResult(surveResultMongoRepository, surveyMongoRepository)
}
