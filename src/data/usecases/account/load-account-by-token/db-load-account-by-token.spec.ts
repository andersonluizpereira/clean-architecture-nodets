import { DbLoadAccountByToken } from './db-load-account-by-token'
import { LoadAccountByTokenRepository, Decrypter } from './db-load-account-by-token-protocols'
import { throwError, mockAccountModel } from '@/domain/test'
import { mockDecrypterStub, mockLoadAccountByTokenRepositoryStub } from '@/data/test'

describe('DbLoadAccountByToken Usecase', () => {
  type SutTypes = {
    sut: DbLoadAccountByToken
    decrypterStub: Decrypter
    loadAccountByTokenRepositoryStub: LoadAccountByTokenRepository
  }
  const makeSut = (): SutTypes => {
    const decrypterStub = mockDecrypterStub()
    const loadAccountByTokenRepositoryStub = mockLoadAccountByTokenRepositoryStub()
    const sut = new DbLoadAccountByToken(decrypterStub, loadAccountByTokenRepositoryStub)
    return {
      sut,
      decrypterStub,
      loadAccountByTokenRepositoryStub
    }
  }

  test('Should call Decrypter with correct values', async () => {
    const { sut, decrypterStub } = makeSut()
    const decrypSpy = jest.spyOn(decrypterStub, 'decrypt')
    await sut.load('any_token', 'any_role')
    expect(decrypSpy).toHaveBeenCalledWith('any_token')
  })
  test('Should return null if Decrypter returns null', async () => {
    const { sut, decrypterStub } = makeSut()
    jest.spyOn(decrypterStub, 'decrypt').mockReturnValueOnce(new Promise(resolve => resolve(null)))
    const account = await sut.load('any_token', 'any_role')
    expect(account).toBeNull()
  })

  test('Should call LoadAccountByTokenRepository with correct values', async () => {
    const { sut, loadAccountByTokenRepositoryStub } = makeSut()
    const loadByTokenSpy = jest.spyOn(loadAccountByTokenRepositoryStub, 'loadByToken')
    await sut.load('any_token', 'any_role')
    expect(loadByTokenSpy).toHaveBeenCalledWith('any_token', 'any_role')
  })

  test('Should return null if LoadAccountByTokenRepository returns null', async () => {
    const { sut, loadAccountByTokenRepositoryStub } = makeSut()
    jest.spyOn(loadAccountByTokenRepositoryStub, 'loadByToken').mockReturnValueOnce(new Promise(resolve => resolve(null)))
    const account = await sut.load('any_token', 'any_role')
    expect(account).toBeNull()
  })
  test('Should return an account on success', async () => {
    const { sut } = makeSut()
    const account = await sut.load('any_token', 'any_role')
    expect(account).toEqual(mockAccountModel())
  })

  test('Should throw if decrypterStub throws', async () => {
    const { sut, decrypterStub } = makeSut()
    jest.spyOn(decrypterStub, 'decrypt').mockImplementationOnce(throwError)
    const promise = sut.load('any_token', 'any_role')
    await expect(promise).rejects.toThrow()
  })
  test('Should throw if LoadAccountByTokenRepository throws', async () => {
    const { sut, loadAccountByTokenRepositoryStub } = makeSut()
    jest.spyOn(loadAccountByTokenRepositoryStub, 'loadByToken').mockImplementationOnce(throwError)
    const promise = sut.load('any_token', 'any_role')
    await expect(promise).rejects.toThrow()
  })
})
