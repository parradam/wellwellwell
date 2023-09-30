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
  // eslint-disable-next-line no-underscore-dangle
  const day = new Day({ date: parsedDate, score, tags, user: req.user._id });
  const savedDay = await day.save();

  return res.status(201).json(savedDay);
};

const removeDay = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Missing ID parameter' });
  }

  const dayToDelete = await Day.findOne({ _id: id });
  // eslint-disable-next-line no-underscore-dangle
  if (dayToDelete.user.toString() !== req.user._id.toString()) {
    return res
      .status(401)
      .json({ message: 'Cannot delete day of another user' });
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
    // eslint-disable-next-line no-underscore-dangle
    const days = await Day.find({ user: req.user._id });
    res.json(days);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { createDay, removeDay, getDays };
