import request from 'supertest';

import app from '../../src/server';

describe('Hello', () => {
  describe('GET /hello', () => {
    it('should response msg hello', async () => {
      const { body } = await request(app).get('/hello');

      expect(body).toMatchObject({ msg: 'hello!' });
    });

    it('should response 200', async () => {
      const { status } = await request(app).get('/hello');

      expect(status).toBe(200);
    });
  });
});
