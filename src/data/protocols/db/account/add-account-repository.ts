import { AddAccountModel } from '@/domain/usecases/account/add-account'
import { AccountModel } from '@/domain/model/account'

export interface AddAccountRepository {
  add(accountData: AddAccountModel): Promise<AccountModel>
}
