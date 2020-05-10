import { AddAccountModel } from '../../domain/usecases/add-account'
import { AccountModel } from '../../domain/model/account'

export interface AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel>
}
