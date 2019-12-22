import request from 'supertest';

import app from '../../src/server';
import User from '../../src/app/models/User';

import { closeDb, dropDb } from '../utils';
import { userInfo } from 'os';

describe('User', () => {
  const defaultUser = {
    name: 'Eduardo Palhares',
    dob: '1997-07-16',
    address: 'Cotia - SP',
    description: 'A nice guy',
  };

  describe('POST /users', () => {
    it('should create an user', async () => {
      const { body, status } = await request(app)
        .post('/users')
        .send(defaultUser);

      expect(status).toBe(201);
      expect(body).toMatchObject(defaultUser);
    });
  });

  describe('GET /users', () => {
    it('should response an users list', async () => {
      await User.create(defaultUser);
      const { body: users } = await request(app).get('/users');
      const [user] = users;

      expect(user).toMatchObject(defaultUser);
    });
  });

  afterEach(async () => {
    await dropDb();
  });

  afterAll(async done => {
    await dropDb();
    await closeDb();
    done();
  });
});
