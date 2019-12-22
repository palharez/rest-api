import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

import express, { Express } from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

import { uri } from './config/database';
import routes from './routes';

class App {
  express: Express;

  constructor() {
    this.express = express();
    this.database();
    this.middlewares();
    this.routes();
  }

  database() {
    mongoose.connect(uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(morgan('dev'));
  }

  routes() {
    this.express.use(routes);
  }
}

export = new App().express;
