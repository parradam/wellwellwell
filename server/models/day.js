import mongoose from 'mongoose';

const daySchema = new mongoose.Schema({
  date: { type: Date, required: true },
  score: { type: Number, required: true },
  tags: [String],
});

const dayModel = mongoose.model('Day', daySchema);

export default dayModel;
