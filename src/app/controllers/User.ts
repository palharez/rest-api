import User from '../models/User';
import { Request, Response } from 'express';

class UserController {
  async store(req: Request, res: Response) {
    try {
      const { address, description, name, dob } = req.body;
      const user = await User.create({ address, description, name, dob });

      return res.status(201).json(user);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async index(req: Request, res: Response) {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  async show(req: Request, res: Response) {
    try {
      const _id = req.params.id;

      const user = await User.findById(_id);
      res.json(user);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

export = new UserController();
