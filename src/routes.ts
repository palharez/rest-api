import express from 'express';

const routes = express.Router();

routes.get('/hello', (req, res) => {
  return res.json({
    msg: 'hello!',
  });
});

export = routes;
