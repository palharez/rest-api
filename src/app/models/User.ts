import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: String,
    dob: String,
    address: String,
    description: String,
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } },
);

export = mongoose.model('User', UserSchema);
