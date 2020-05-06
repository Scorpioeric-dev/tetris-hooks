export const Stage_Width = 12;
export const Stage_Height = 20;

export const createStage = () =>
  Array.from(Array(Stage_Height), () =>
   new Array(Stage_Width).fill([0, "clear"])
  );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetrominos.length; y += 1) {
    for (let x = 0; x < player.tetrominos[0].length; x += 1) {
      // 1. Check that we're on an actual tetrominos cell
      if (player.tetrominos[y][x] !== 0) {
        if (
          //2.Check movement inside game areas height(y)
          // We shouldn't go through the bottom of the play area
          !stage[y + player.pos.y + moveY] ||
          //3.Check that our move is inside the game areas width(x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          //4.Check that the cell we're moving to isn't set to clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};
