const request = require('supertest');
const app = require('./api');  // Ensure the correct path to api.js is used
const { expect } = require('chai');

describe('Index page', () => {
  it('GET / returns correct response', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).to.equal(200);
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});
