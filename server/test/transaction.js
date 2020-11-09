"use strict"
const request = require('supertest');
const apiRequest = request('http://localhost:5000/api');
const app = require('../app');

describe('/api/transaction', () => {
  it('GET Should return list of transactions. There is one transaction make', (done) => {
    apiRequest.get('/transaction').expect((res) => {
      res.body[0].effectiveDate = '2020-11-07';
    }).expect(200, [{
      id: '1',
      type: 'credit',
      amount: 300,
      effectiveDate: '2020-11-07'
    }], done);
  });
  it('POST Create a new transaction and return it', (done) => {
    apiRequest.post('/transaction').send({type: 'credit', amount: 500}).expect((res) => {
      res.body.newTransaction.effectiveDate = '2020-11-07';
    }).expect(200, {
      newTransaction: {
        id: '2',
        type: 'credit',
        amount: 500,
        effectiveDate: '2020-11-07'
      },
      balanceAccount: 1800
    }, done);
  });
  it('POST Try to create a new debit transaction but this would lead to a negative balance', (done) => {
    apiRequest.post('/transaction').send({type: 'debit', amount: 2000})
    .expect(409, {
      Error: 'It is not possible to do this transaction. The account balance cannot be negative'
    }, done);
  });
});