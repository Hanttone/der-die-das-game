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

  function changePlayerLives(life) {
    setPlayerLives(playerLives - life);
  }

  return (
    <GameUpdateContext.Provider
      value={{ playerLives, changePlayerLives }}>
      {children}
    </GameUpdateContext.Provider>
  );
}

export const useGameUpdate = () =>
  useContext(GameUpdateContext);
export const usePlayerLives = () =>
  useGameUpdate().changePlayerLives;
export const useLife = () =>
  useGameUpdate().playerLives;
