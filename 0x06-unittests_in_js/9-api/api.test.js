const request = require('supertest');
const app = require('./api');
const { expect } = require('chai');

describe('Index Page', () => {
    it('Should return 200 and correct message when :id is a number', (done) => {
        request(app)
          .get('/cart/12')
          .expect(200)
          .end((err, res) => {
            if (err) return done(err);
            expect(res.text).to.equal('Payment methods for cart 12');
            done();
          });
      });
    
      it('Should return 404 when :id is not a number', (done) => {
        request(app)
          .get('/cart/hello')
          .expect(404)
          .end((err, res) => {
            if (err) return done(err);
            expect(res.status).to.equal(404);
            done();
          });
  });
});
