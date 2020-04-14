import React from 'react'
import {StyledCell} from './styles/StyledCell'
import {Tetrominos} from '../tetrominos'


const Cell = ({type}) => (
   
        <StyledCell type={'L'} color={Tetrominos['L'].color} >
         cell
        </StyledCell>
    
)
export default Cell
