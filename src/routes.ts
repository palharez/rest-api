import express from 'express';

const routes = express.Router();

import UserController from './app/controllers/User';

routes.get('/hello', (req, res) => {
  return res.json({
    msg: 'hello!',
  });
});

/**
 * Users
 */
routes.post('/users', UserController.store);

export = routes;
