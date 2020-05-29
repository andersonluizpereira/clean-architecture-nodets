import { Router } from 'express'
import { makeSignUpController } from '../factories/sigup/signup-factory'
import { adaptRoute } from '../adapters/express/express-routes-adapter'
import { makeLoginController } from '../factories/login/login-factory'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
  router.post('/login', adaptRoute(makeLoginController()))
}
