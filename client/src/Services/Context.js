import React from 'react';
import { useState, useContext } from 'react';

export const GameUpdateContext = React.createContext(
  null
);

export function GameUpdateProvider({ children }) {
  const [playerLives, setPlayerLives] = useState(
    3
  );

  const [counter, setCounter] = useState(15);

  const [playerScore, setPlayerScore] = useState(
    0
  );

  const [
    newHighScore,
    setNewHighScore,
  ] = useState({});

  function changePlayerLives(life) {
    setPlayerLives(playerLives - life);
  }

  return (
    <GameUpdateContext.Provider
      value={{
        playerLives,
        setPlayerLives,
        changePlayerLives,
        counter,
        setCounter,
        playerScore,
        setPlayerScore,
        newHighScore,
        setNewHighScore,
      }}>
      {children}
    </GameUpdateContext.Provider>
  );
}

export const useGameUpdate = () =>
  useContext(GameUpdateContext);
export const useSetPlayerLives = () =>
  useGameUpdate().setPlayerLives;
export const usePlayerLives = () =>
  useGameUpdate().changePlayerLives;
export const useLife = () =>
  useGameUpdate().playerLives;
export const useCounter = () =>
  useGameUpdate().counter;
export const useSetCounter = () =>
  useGameUpdate().setCounter;
export const usePlayerScore = () =>
  useGameUpdate().playerScore;
export const useSetPlayerScore = () =>
  useGameUpdate().setPlayerScore;
export const useNewHighScore = () =>
  useGameUpdate().newHighScore;
export const useSetNewHighScore = () =>
  useGameUpdate().setNewHighScore;
