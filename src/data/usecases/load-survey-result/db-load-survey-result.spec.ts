import { DbLoadSurveyResult } from './db-load-survey-result'
import { mockLoadSurveyResultRepositoryStub, mockLoadSurveyByIdRepository } from '@/data/test'
import { LoadSurveyResultRepository, LoadSurveyByIdRepository } from './db-load-survey-result-protocols'
import { throwError, mockSurveyResultModel } from '@/domain/test'
import MockDate from 'mockdate'

type SutTypes = {
  sut: DbLoadSurveyResult
  loadSurveyResultRepositoryStub: LoadSurveyResultRepository
  loadSurveyByIdResultRepositoryStub: LoadSurveyByIdRepository
}

const makeSut = (): SutTypes => {
  const loadSurveyResultRepositoryStub = mockLoadSurveyResultRepositoryStub()
  const loadSurveyByIdResultRepositoryStub = mockLoadSurveyByIdRepository()
  const sut = new DbLoadSurveyResult(loadSurveyResultRepositoryStub, loadSurveyByIdResultRepositoryStub)
  return {
    loadSurveyResultRepositoryStub,
    sut,
    loadSurveyByIdResultRepositoryStub
  }
}

describe('DbLoadSurveyResult UseCase', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })
  afterAll(() => {
    MockDate.reset()
  })
  test('Should call LoadSurveyResultRepository', async () => {
    const { sut,loadSurveyResultRepositoryStub } = makeSut()
    const loadBySurveyIdSpy = jest.spyOn(loadSurveyResultRepositoryStub, 'loadBySurveyId')
    await sut.load('any_survey_id')
    expect(loadBySurveyIdSpy).toHaveBeenCalledWith('any_survey_id')
  })

  test('Should throw if LoadSurveyResultRepository throws', async () => {
    const { sut, loadSurveyResultRepositoryStub } = makeSut()
    jest.spyOn(loadSurveyResultRepositoryStub, 'loadBySurveyId').mockImplementationOnce(throwError)
    const promise = sut.load('any_survey_id')
    await expect(promise).rejects.toThrow()
  })

  test('Should call LoadSurveyByIdRepository if LoadSurveyResultRepository returns null', async () => {
    const { sut, loadSurveyResultRepositoryStub, loadSurveyByIdResultRepositoryStub } = makeSut()
    const loadBySurveyId = jest.spyOn(loadSurveyByIdResultRepositoryStub, 'loadById')
    jest.spyOn(loadSurveyResultRepositoryStub, 'loadBySurveyId').mockReturnValueOnce(Promise.resolve(null))
    await sut.load('any_survey_id')
    expect(loadBySurveyId).toHaveBeenCalledWith('any_survey_id')
  })

  test('Should return if surveyResultModel on success', async () => {
    const { sut } = makeSut()
    const survey = await sut.load('any_survey_id')
    await expect(survey).toEqual(mockSurveyResultModel())
  })
})
