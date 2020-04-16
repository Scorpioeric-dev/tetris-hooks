import React, { useState } from "react";
import { createStage } from "../gameHelper";
//Components
import Stage from "./Stage";
import Display from "./Display";
import StartBtn from "./StartBtn";
//StyledComponents
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";
//Hooks
import { useStage } from "../hooks/useStage";
import { usePlayer } from "../hooks/usePlayer";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player,updatePlayerPos,resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log("re-renders");

  const movePlayer = (dir) => {
    updatePlayerPos({x:dir,y:0})
  };

  const startGame = () => {
    //reset Game
    setStage(createStage())
    resetPlayer()
  };
  const drop = () => {
    updatePlayerPos({x:0,y:1, collided:false})
  };
  const dropPlayer = () => {
    drop()
  };
  const move = ({ keyCode }) => {
    if(!gameOver){
      //keycode equal left arrow on key board
      if(keyCode === 37){
        //moving player to the left 
        movePlayer(-1)
        //moving player to the right with right arrow
      } else if(keyCode === 39){
        movePlayer(1)
        //move player down with down arrow
      }else if(keyCode === 40){
        dropPlayer()
      }
    }
  };
  return (
    <StyledTetrisWrapper role="button" tabIndex='0' onKeyDown={e => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartBtn callback={startGame}/>
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};
export default Tetris;
