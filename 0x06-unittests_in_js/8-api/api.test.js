const request = require('supertest');
const app = require('./api');
const { expect } = require('chai');

describe('Index Page', () => {
  it('Correct status code?', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('Correct result?', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});
