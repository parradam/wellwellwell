import { describe, it, expect } from '@jest/globals';
import Day from './day.js';

describe('day', () => {
  it('should be invalid if date is empty', () => {
    const d = new Day();
    const validationError = d.validateSync();
    console.log(validationError);
    expect(validationError.errors.date).toBeDefined();
  });
});
