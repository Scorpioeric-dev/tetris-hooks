import React from "react";
import Stage from "./Stage";
import Display from "./Display";
import StartBtn from "./StartBtn";
import { createStage } from "../gameHelper";
import {StyledTetrisWrapped,StyledTetris} from '..styled/StyledTetris'

const Tetris = () => {
  return (
    <StyledTetrisWrapped>
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
    </StyledTetrisWrapped>
  );
};
export default Tetris;
