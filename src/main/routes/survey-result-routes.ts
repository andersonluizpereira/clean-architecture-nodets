import { Router } from 'express'
import { adaptRoute } from '../adapters/express-routes-adapter'
import { auth } from '../middlewares/auth'
import { makeSaveSurveyResultSurveysController } from '../factories/controllers/survey-result/save-survey-result/save-survey-result-controller-factory'

export default (router: Router): void => {
  router.put('/surveys/:surveyId/results', auth, adaptRoute(makeSaveSurveyResultSurveysController()))
}
