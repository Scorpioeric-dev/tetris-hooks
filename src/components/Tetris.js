import React from "react";
import Stage from "./Stage";
import Display from "./Display";
import StartBtn from "./StartBtn";
import { createStage } from "../gameHelper";
import {StyledTetrisWrapper,StyledTetris} from './styles/StyledTetris'

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartBtn />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};
export default Tetris;
