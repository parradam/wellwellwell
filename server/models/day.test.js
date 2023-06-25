import { describe, it, expect } from '@jest/globals';
import Day from './day.js';

describe('Day model', () => {
  it('should be invalid if date is empty', () => {
    const d = new Day();
    const validationError = d.validateSync();
    expect(validationError.errors.date).toBeDefined();
  });

  it('should be invalid if date is invalid', () => {
    const d = new Day({
      date: 'invalid_date',
    });
    const validationError = d.validateSync();
    expect(validationError.errors.date).toBeDefined();
  });

  it('should be valid if date is provided', () => {
    const d = new Day({
      date: new Date(),
      score: 1,
      tags: ['test'],
    });
    const validationError = d.validateSync();
    expect(validationError).toBeUndefined();
  });
});
