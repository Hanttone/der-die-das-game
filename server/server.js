import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Score from './Models/Score';
import Noun from './Models/Noun';

const server = express();
mongoose.connect(
  'mongodb://localhost:27017/germannouns',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.json({
    status: 'running',
    words: '/api/germannouns',
    scores: '/api/scores',
  });
});

server.get('/api/germannouns', (req, res) => {
  Noun.find().then((nouns) => res.json(nouns));
});

server.get('/api/scores', (req, res) => {
  Score.find().then((scores) => res.json(scores));
});

server.post('/api/scores', (req, res) => {
  const playerScoreData = req.body;
  const playerNameAndScore = new Score(
    playerScoreData
  );
  playerNameAndScore
    .save()
    .then(() => res.json(playerScoreData));
});

server.post('/api/germannouns', (req, res) => {
  const germanNounData = req.body;
  const germanNoun = new Noun(germanNounData);
  germanNoun
    .save()
    .then(() => res.json(germanNounData));
});

const port = 4000;
server.listen(port, () => {
  console.log(
    `server is open at: http://localhost:${port}`
  );
});
