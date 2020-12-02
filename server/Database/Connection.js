import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './Database/.env' });

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@derdiedas.qwesx.mongodb.net/germannouns`;
async function connectDB() {
  await mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .catch((error) => console.log(error.message));
  console.log('db is connected');
}

module.exports = connectDB;
