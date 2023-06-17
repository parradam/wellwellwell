import Day from '../models/day';

const createDay = async (req, res) => {
  try {
    const { date, score, tags } = req.body;
    const day = new Day({ date, score, tags });
    const savedDay = await day.save();

    res.status(201).json(savedDay);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default { createDay };
