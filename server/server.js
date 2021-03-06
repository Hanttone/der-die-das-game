import express from 'express';
import Score from './Models/Score';
import Noun from './Models/Noun';
import connectDB from './Database/Connection';
import path from 'path';
import cors from 'cors';
//has to be imported here otherwise server not working in dev mode
import dotenv from 'dotenv';

const server = express();
connectDB();
dotenv.config();

const port = process.env.PORT || 4000;

server.use(express.json());
server.use(cors());

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

server.listen(port, () => {
  console.log(`server is open at: ${port}`);
});
