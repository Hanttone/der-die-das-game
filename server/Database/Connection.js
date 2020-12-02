import mongoose from 'mongoose';

const url = `'mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@derdiedas.qwesx.mongodb.net/germannouns'`;
async function connectDB() {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  console.log('db is connected');
}

module.exports = connectDB;
