import { afterAll, beforeAll, describe, expect, it } from '@jest/globals';
import supertest from 'supertest';
import { openConnection, closeConnection } from './utils/db.js';
import Day from './models/day.js';
import app from './app.js';
import testData from './test-data.js';

const api = supertest(app);

// TODO test error handler implicitly by simulating ValidationError, TypeError, CastError, etc.
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

    it('should handle a POST with an invalid date', async () => {
      const invalidDay = {
        // no month has 40 days!
        date: '2023-06-40T20:49:58.178Z',
        score: 1,
        tags: ['dayRoute', 'test'],
      };

      const response = await api
        .post('/api/days')
        .send(invalidDay)
        .expect(400)
        .expect('Content-Type', /application\/json/);

      expect(response.body).toHaveProperty('error', 'Day validation failed');
    });

    it('should handle a POST with a missing field', async () => {
      const invalidDay = {
        date: '2023-06-20T20:49:58.178Z',
        // score removed
        tags: ['dayRoute', 'test'],
      };

      const response = await api
        .post('/api/days')
        .send(invalidDay)
        .expect(400)
        .expect('Content-Type', /application\/json/);

      expect(response.body).toHaveProperty('error', 'Missing request field(s)');
    });

    it('should handle an empty POST', async () => {
      const response = await api
        .post('/api/days')
        .send(undefined)
        .expect(400)
        .expect('Content-Type', /application\/json/);

      expect(response.body).toHaveProperty('error', 'Missing request field(s)');
    });
  });
});
