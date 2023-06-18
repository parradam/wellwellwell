import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost:27017/wellwellwell', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    // return mongoose.connection.db.dropDatabase(); // Optional: Drops the database if it already exists
  })
  .then(() => {
    console.log('Database "wellwellwell" created');
    mongoose.disconnect();
  })
  .catch((error) => {
    console.error('Error creating database:', error);
    mongoose.disconnect();
  });
