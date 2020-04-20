import { useState, useCallback } from "react";
import { Tetrominos, randomTetromino } from "../tetrominos";
import { Stage_Width, checkCollision } from "../gameHelper";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    //grabbing a shape from array of shapes
    tetrominos: Tetrominos[0].shape,
    collided: false,
  });

  const rotate = (matrix, dir) => {
    //Make the rows to become cols (transpose)
    const rotatedTetro = matrix.map((_, index) =>
      matrix.map((col) => col[index])
    );
    //Reverse each row to get a rotated matrix
    if (dir > 0) return rotatedTetro.map((row) => row.reverse());
    return rotatedTetro.reverse();
  };
  const playerRotate = (stage, dir) => {
    //Duplicates Player to not affect state
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetrominos = rotate(clonedPlayer.tetrominos, dir);
    const pos = clonedPlayer.pos.x;
    let offset = 1;
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      //checks collision on tetrominos
      offset = - (offset + (offset > 0 ? 1 : -1))
      if(offset > clonedPlayer.tetrominos[0].length){
        rotate(clonedPlayer.tetrominos,-dir)
        clonedPlayer.pos.x = pos
        return
      }
    }
    setPlayer(clonedPlayer);
  };
  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: Stage_Width / 2 - 2, y: 0 },
      tetrominos: randomTetromino().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer, playerRotate];
};
