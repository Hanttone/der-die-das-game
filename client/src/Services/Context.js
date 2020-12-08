import React from 'react';
import { useState, useContext } from 'react';

export const GameUpdateContext = React.createContext(
  null
);

export function GameUpdateProvider({ children }) {
  //if lives disappear it is because they go below 0 then they wont be shown!
  const [playerLives, setPlayerLives] = useState(
    3
  );

  //timer time
  const [counter, setCounter] = useState(15);

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
