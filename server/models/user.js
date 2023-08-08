import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      lowercase: true,
      required: [true, 'Username is required'],
      match: [/^[a-zA-Z0-9]+$/, 'Username is invalid'],
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, 'Email is required'],
      validate: [validator.isEmail, 'Email is invalid'],
    },
    hash: { type: String, required: true },
    salt: { type: String, required: true },
    bio: { type: String },
    image: { type: String },
  },
  { timestamps: true },
);

const User = mongoose.model('User', userSchema);

export default User;
