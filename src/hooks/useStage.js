import { useState,useEffect } from "react";
import {createStage} from '../gameHelper'


export const useStage = (player , resetPlayer) => {
    const [stage,setStage] = useState(createStage())
    
    useEffect(() =>{
const updateStage = prevStage => {
    //flush the stage 
    const newStage = prevStage.map(row => 
        row.map(cell => (cell[1] === 'clear' ? [0,'clear'] : cell)))
        //Draw the tetrominos
player.tetrominos.forEach((row,y) =>{
    row.forEach((value,x) => {
        if(value !== 0){
            newStage[y + player.pos.y][x + player.pos.x]=[
                value,
                `${player.collided ? 'merged' : 'clear'}`,
            ]
        }
    })
})
return newStage

}

setStage(prev => updateStage(prev))

    },[player])
     
        
        return [stage,useStage]
    }