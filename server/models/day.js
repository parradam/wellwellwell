import mongoose from 'mongoose';

const daySchema = new mongoose.Schema({
  date: { type: Date, required: true },
  score: { type: Number, required: true },
  tags: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Day = mongoose.model('Day', daySchema);

export default Day;
