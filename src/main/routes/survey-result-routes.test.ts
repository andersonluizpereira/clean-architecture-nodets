import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
// import { Collection } from 'mongodb'
// import { sign } from 'jsonwebtoken'
// import env from '../config/env'

// let surveyCollection: Collection
// let accountCollection: Collection

// const makeAccessToken = async (): Promise<string> => {
//   const res = await accountCollection.insertOne({
//     name: 'Anderson',
//     email: 'andy2903.alp@gmail.com',
//     password: '123',
//     role: 'admin'
//   })
//   const id = res.ops[0]._id
//   const accessToken = sign({ id }, env.jwtSecret)
//   await accountCollection.updateOne({
//     _id: id
//   }, {
//     $set: {
//       accessToken
//     }
//   })
//   return accessToken
// }

describe('Survey Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  // beforeEach(async () => {
  //   surveyCollection = await MongoHelper.getCollection('surveys')
  //   await surveyCollection.deleteMany({})
  //   accountCollection = await MongoHelper.getCollection('accounts')
  //   await accountCollection.deleteMany({})
  // })

  describe('Put /surveys/:surveyId/results', () => {
    test('Should return 403 on save survey result without accessToken', async () => {
      await request(app)
        .put('/api/surveys/any_id/results')
        .send({
          answer: 'any_answer'
        })
        .expect(403)
    })

    // test('Should return 204 on add survey with valid accessToken', async () => {
    //   const accessToken = await makeAccessToken()
    //   await request(app)
    //     .post('/api/surveys')
    //     .set('x-access-token', accessToken)
    //     .send({
    //       question: 'Question',
    //       answers: [{
    //         answer: 'Answer 1',
    //         image: 'http://image-name.com'
    //       }, {
    //         answer: 'Answer 2'
    //       }]
    //     })
    //     .expect(204)
    // })
  })
})
