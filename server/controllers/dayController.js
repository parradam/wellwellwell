import Day from '../models/day.js';

const createDay = async (req, res) => {
  try {
    console.log(req.body);
    const { date, score, tags } = req.body;
    const parsedDate = new Date(date);
    const day = new Day({ date: parsedDate, score, tags });
    const savedDay = await day.save();

    console.log('saved', savedDay);

    res.status(201).json(savedDay);
  } catch (error) {
    console.log(error);
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
