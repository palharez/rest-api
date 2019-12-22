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
}

export = new UserController();
