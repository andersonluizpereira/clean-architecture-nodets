import bcrypt from 'bcrypt'
import { BycryptAdapter } from './bcrypt-adapter'

describe('Brypt Adapter', () => {
  test('Should call bcrypt with correct value', async () => {
    const salt = 12
    const sut = new BycryptAdapter(salt)
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })
})
