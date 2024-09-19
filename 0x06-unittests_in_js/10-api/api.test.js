const request = require('supertest');
const app = require('./api');
const { expect } = require('chai');

describe('Cart Page', () => {
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

describe('Available Payments Page', () => {
  it('Should return available payment methods', (done) => {
    request(app)
      .get('/available_payments')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
  });
});

describe('Login Page', () => {
  it('Should return a message with the username from the body', (done) => {
    request(app)
      .post('/login')
      .send({ userName: 'Betty' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Welcome Betty');
        done();
      });
  });
});
