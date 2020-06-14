import { Validation } from '@/presentation/controllers/login/signup/signup-controller-protocols'
import { RequiredFieldValidation, CompareFieldsValidation, EmailValidation, ValidationComposite } from '@/validation/validators'
import { makeSignUpValidation } from './signup-validation-factory'
import { mockEmailValidator } from '@/validation/test'

jest.mock('@/validation/validators/validation-composite.ts')

describe('SignUpValidation Factory', () => {
  test('Should call ValidationComposite with all validatations', () => {
    makeSignUpValidation()
    const validations: Validation[] = []
    for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
      validations.push(new RequiredFieldValidation(field))
    }
    validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
    validations.push(new EmailValidation('email', mockEmailValidator()))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
