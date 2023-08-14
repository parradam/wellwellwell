import Day from '../models/day.js';

const createDay = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ error: 'Missing request body' });
  }

  const { date, score, tags } = req.body;

  if (!date || score === undefined || tags === undefined) {
    return res.status(400).json({ error: 'Missing request field(s)' });
  }

  const parsedDate = new Date(date);
  const day = new Day({ date: parsedDate, score, tags });
  const savedDay = await day.save();

  return res.status(201).json(savedDay);
};

const removeDay = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Missing ID parameter' });
  }

  try {
    await Day.deleteOne({ _id: id });
    return res.status(200).json({ message: 'Deletion successful' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
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

export { createDay, removeDay, getDays };
