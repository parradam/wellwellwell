import Day from '../models/day.js';

const createDay = async (req, res) => {
  try {
    const { date, score, tags } = req.body;
    const parsedDate = new Date(date);
    const day = new Day({ date: parsedDate, score, tags });
    const savedDay = await day.save();

    res.status(201).json(savedDay);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
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
