import sinon from 'sinon';
import { expect } from 'chai';
import { sendPaymentRequestToApi } from './5-payment.js';

describe('sendPaymentRequestToApi', () => {
    let spy;
  
    beforeEach(() => {
   
      // Spy on console.log
      spy = sinon.spy(console, 'log');
    });
  
    afterEach(() => {
      // Restore the original methods after each test
      spy.restore();
    });
  
    it('should log the correct total for 100 and 20', () => {
      sendPaymentRequestToApi(100, 20);
  
      expect(spy.calledOnce).to.be.true;
      expect(spy.calledWith('The total is: 120')).to.be.true;
    });
    
    it('should log the correct total for 10 and 10', () => {
        sendPaymentRequestToApi(10, 10);
      expect(spy.calledOnce).to.be.true;
      expect(spy.calledWith('The total is: 20')).to.be.true;
  });
});