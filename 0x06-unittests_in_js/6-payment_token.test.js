import { expect } from 'chai';
import { getPaymentTokenFromAPI } from './6-payment_token.js';

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error); 
  });
});
});