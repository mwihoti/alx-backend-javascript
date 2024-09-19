import assert from 'assert';
import { calculateNumber } from './0-calcul.js';

describe('calculateNumber', () => {
    describe('calculateNumber', () => {
        it('floating point whole numbers', () => {
          assert.strictEqual(calculateNumber(1.0, 2.0), 3);
        });
      
        it('rounding down b\'s floating point fractional number', () => {
          assert.strictEqual(calculateNumber(1.0, 2.4), 3);
        });
      
        it('rounding down a and b\'s floating point fractional number', () => {
          assert.strictEqual(calculateNumber(1.4, 2.4), 3);
        });
      
        it('rounding down a\'s floating point fractional number', () => {
          assert.strictEqual(calculateNumber(1.4, 2.0), 3);
        });
      
        it('rounding up b\'s floating point fractional numbers', () => {
          assert.strictEqual(calculateNumber(1.0, 2.5), 4);
        });
      
        it('rounding up a and b\'s floating point fractional numbers', () => {
          assert.strictEqual(calculateNumber(2.6, 2.5), 6);
        });
});
});