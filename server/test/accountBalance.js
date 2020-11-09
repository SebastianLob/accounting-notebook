"use strict"
const request = require('supertest');
const apiRequest = request('http://localhost:5000/api');
const app = require('../app');
const fetch = require('node-fetch');

describe('/api/accountBalance', () => {
  it('GET Before transaction. Initially is 1000', (done) => {
    apiRequest.get('/accountBalance').expect(200, '1000', done);
  });
  it('GET After transaction of $500', (done) => {
    fetch('http://localhost:5000/api/transaction', {
      method: 'POST',
      body: JSON.stringify({type: 'credit', amount: 300}),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(apiRequest.get('/accountBalance').expect(200, '1300', done));
  });
});