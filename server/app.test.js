import { afterAll, beforeAll, describe, it } from '@jest/globals';
import supertest from 'supertest';
import { openConnection, closeConnection } from './utils/db.js';
import Day from './models/day.js';
import app from './app.js';
import testData from './test-data.js';

const api = supertest(app);

beforeAll(async () => {
  await openConnection();
  await Day.deleteMany({});
  await Day.insertMany(testData.day);
});

afterAll(async () => {
  await closeConnection();
});

describe('app', () => {
  describe('day route', () => {
    it('should handle a valid POST', async () => {
      const day = {
        date: '2023-06-04T20:49:58.178Z',
        score: 1,
        tags: ['dayRoute', 'test'],
      };

      await api
        .post('/api/days')
        .send(day)
        .expect(201)
        .expect('Content-Type', /application\/json/);
    });

    it.skip('should handle a ValidationError from MongoDB', async () => {});
  });
});
