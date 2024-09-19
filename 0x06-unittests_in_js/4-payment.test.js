import sinon from 'sinon';
import { expect } from 'chai';
import { Utils } from './utils.js';
import { sendPaymentRequestToApi } from './3-payment.js';

describe('sendPaymentRequestToApi', () => {
    let stub;
    let spy;
  
    beforeEach(() => {
      // Stub the calculateNumber method
      stub = sinon.stub(Utils, 'calculateNumber').returns(10);
  
      // Spy on console.log
      spy = sinon.spy(console, 'log');
    });
  
    afterEach(() => {
      // Restore the original methods after each test
      stub.restore();
      spy.restore();
    });
  
    it('should call Utils.calculateNumber with correct arguments', () => {
      sendPaymentRequestToApi(100, 20);
  
      expect(stub.calledOnce).to.be.true;
      expect(stub.calledWith('SUM', 100, 20)).to.be.true;
  
      expect(spy.calledOnce).to.be.true;
      expect(spy.calledWith('The total is: 10')).to.be.true;
  });
});