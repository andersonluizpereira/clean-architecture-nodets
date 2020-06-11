import { LoadSurveyById } from '@/domain/usecases/load-surveys-by-id'
import { SurveyModel } from '@/domain/model/survey'
import { LoadSurveyByIdRepository } from '@/data/protocols/db/survey/load-survey-by-id-repository'

export class DbLoadSurveyById implements LoadSurveyById {
  constructor (private readonly loadSurveyByIdRepository: LoadSurveyByIdRepository) {}
  async loadById (id: string): Promise<SurveyModel> {
    await this.loadSurveyByIdRepository.loadById(id)
    return null
  }
}
