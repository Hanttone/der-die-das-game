import express from 'express';
import Score from './Models/Score';
import Noun from './Models/Noun';
import connectDB from './Database/Connection';
import path from 'path';
import dotenv from 'dotenv';

const server = express();
connectDB();

const PORT = process.env.PORT || 4000;
const host = '0.0.0.0';

server.use(express.json());

server.use(
  express.static(
    path.join(__dirname, '../client/build')
  )
);
server.get('/', (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      '../client/build',
      'index.html'
    )
  );
});

server.get('/api', (req, res) => {
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

server.listen(PORT, host, () => {
  console.log(
    `server is open at: http://localhost:${PORT}`
  );
});
