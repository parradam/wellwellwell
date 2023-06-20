import { jest, describe, it, expect } from '@jest/globals';
import { createDay } from './dayController.js';
import Day from '../models/day.js';

jest.mock('../models/day.js');

describe('addDay', () => {
  it('should add day information and return 201', async () => {
    const req = {
      body: {
        date: '2023-06-04T20:49:58.178Z',
        score: 1,
        tags: ['bored', 'tired'],
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const mockedDay = {
      date: req.body.date,
      score: req.body.score,
      tags: req.body.tags,
    };

    const saveMock = jest.fn().mockResolvedValue(mockedDay);
    jest.spyOn(Day.prototype, 'save').mockImplementation(saveMock);

    await createDay(req, res);

    expect(Day.prototype.save).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(req.body);
  });
});
