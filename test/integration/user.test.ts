import request from 'supertest';

import app from '../../src/server';
import User from '../../src/app/models/User';

import { closeDb, dropDb } from '../utils';

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

  describe('GET /user/:id', () => {
    it('shoul response an user', async () => {
      const { _id } = await User.create(defaultUser);
      const { body: user } = await request(app).get(`/user/${_id}`);

      expect(user).toMatchObject(defaultUser);
    });
  });

  describe('PUT /user/:id', () => {
    it('should update an user', async () => {
      const { _id } = await User.create(defaultUser);
      const bodyReq = {
        name: 'Luna Palhares',
      };

      const { body } = await request(app)
        .put(`/user/${_id}`)
        .send(bodyReq);

      expect(body).toMatchObject(bodyReq);
    });
  });

  describe('DELETE /user/:id', () => {
    it('should delete an user', async () => {
      const { _id } = await User.create(defaultUser);
      const { status } = await request(app).delete(`/user/${_id}`);

      expect(status).toBe(204);
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
