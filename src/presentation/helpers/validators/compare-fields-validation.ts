import { Validation } from '../../protocols/validation'
import { InvalidParamError } from '../../errors'

export class CompareFieldsValidation implements Validation {
  constructor (private readonly fieldName: string, private readonly fieldCompareName: string) {

  }

  validate (input: any): Error {
    if (input[this.fieldName] !== input[this.fieldCompareName]) {
      return new InvalidParamError(this.fieldCompareName)
    }
  }
}
