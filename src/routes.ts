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
routes.get('/users', UserController.index);
routes.get('/user/:id', UserController.show);
routes.put('/user/:id', UserController.update);

export = routes;
