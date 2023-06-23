import Day from '../models/day.js';

const createDay = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ error: 'missing request body' });
  }

  const { date, score, tags } = req.body;

  if (!date || !score || !tags) {
    return res.status(400).json({ error: 'missing request field(s)' });
  }

  const parsedDate = new Date(date);
  const day = new Day({ date: parsedDate, score, tags });
  const savedDay = await day.save();

  return res.status(201).json(savedDay);
};

const getDays = async (req, res) => {
  try {
    const days = await Day.find({});
    res.json(days);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { createDay, getDays };
